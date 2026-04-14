# AWS EC2 production deployment for `dissrent.com`

Ovaj projekat je Next.js aplikacija koja koristi:

- Node.js `>=20.9.0`
- SQLite bazu (`better-sqlite3`)
- Resend za email
- Admin pristup preko `ADMIN_PASSWORD` i `ADMIN_SESSION_SECRET`

## 1. Napravi stabilnu IP adresu

Ako je sajt trenutno otvoren preko običnog EC2 public IP-a kao `http://56.228.25.93/`, to nije dovoljno stabilno za domenu jer se IP može promijeniti nakon stop/start instance.

Na AWS-u uradi:

1. `EC2 -> Elastic IP addresses`
2. `Allocate Elastic IP address`
3. `Associate Elastic IP address` sa svojom EC2 instancom

Tek nakon toga koristi taj Elastic IP za DNS zapis domene.

## 2. DNS za `dissrent.com`

Ako si domenu kupio van AWS-a:

1. Otvori DNS panel kod registra domene
2. Dodaj `A` record za `@` koji pokazuje na Elastic IP
3. Dodaj `CNAME` record za `www` koji pokazuje na `dissrent.com`

Ako koristiš Route 53:

1. Napravi `Hosted zone` za `dissrent.com`
2. Prebaci nameservere kod registra na one koje Route 53 dodijeli
3. Dodaj `A` record za root domen na Elastic IP
4. Dodaj `CNAME` record: `www -> dissrent.com`

## 3. Security group

Na EC2 security group otvori:

- `22` samo za tvoj IP
- `80` za `0.0.0.0/0` i `::/0`
- `443` za `0.0.0.0/0` i `::/0`

Port `3000` ne mora biti javno otvoren jer će mu pristupati samo Nginx lokalno.

## 4. Priprema servera

Primjer ispod je za Ubuntu/Debian EC2 instancu.

Instaliraj potrebno:

```bash
sudo apt update
sudo apt install -y nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

Provjeri Node verziju:

```bash
node -v
```

Mora biti `20.9.0` ili novije.

## 5. Deploy aplikacije

U folderu projekta:

```bash
npm ci
cp .env.example .env.production
```

Zatim popuni `.env.production` stvarnim vrijednostima:

```env
APP_BASE_URL=https://dissrent.com
DATABASE_PATH=./data/rentacar.db
ADMIN_PASSWORD=...
ADMIN_SESSION_SECRET=...
RESEND_API_KEY=...
RESEND_FROM_EMAIL=noreply@dissrent.com
ADMIN_EMAIL=info@dissrent.com
```

Ako želiš da baza bude van repozitorijuma, koristi npr:

```env
DATABASE_PATH=/var/lib/dissrent/rentacar.db
```

Napomena: ako prebacuješ postojeću bazu, kopiraj i stari `data/rentacar.db` na novu lokaciju prije starta aplikacije.

Build i start:

```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Nakon `pm2 startup`, PM2 će ispisati još jednu `sudo ...` komandu. Pokreni i nju, pa opet:

```bash
pm2 save
```

Korisne komande:

```bash
pm2 status
pm2 logs dissrent
pm2 restart dissrent
```

## 6. Nginx reverse proxy

Kopiraj pripremljeni config:

```bash
sudo cp deploy/nginx/dissrent.com.conf /etc/nginx/sites-available/dissrent.com
sudo ln -s /etc/nginx/sites-available/dissrent.com /etc/nginx/sites-enabled/dissrent.com
sudo nginx -t
sudo systemctl reload nginx
```

Ako postoji default Nginx site i smeta:

```bash
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 7. HTTPS certifikat

Sačekaj da DNS propagira pa pokreni:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d dissrent.com -d www.dissrent.com
```

Na kraju provjeri auto-renew:

```bash
sudo systemctl status certbot.timer
```

## 8. Health check

Health endpoint postoji na:

```text
https://dissrent.com/api/health
```

To možeš koristiti za uptime monitoring.

## 9. Preporučeni redoslijed sada

1. Dodijeli Elastic IP instanci
2. Prebaci DNS `A` zapis domene na taj Elastic IP
3. Na serveru postavi `.env.production`
4. Pokreni `npm ci` i `npm run build`
5. Podigni aplikaciju preko PM2
6. Uključi Nginx proxy
7. Izdaj HTTPS certifikat
8. Testiraj `https://dissrent.com` i `https://www.dissrent.com`

## 10. Bitne napomene za ovaj projekat

- Aplikacija trenutno čuva rezervacije u SQLite fajlu. To je u redu za jednu EC2 instancu, ali obavezno pravi backup tog fajla.
- Ako ikada zamijeniš instancu bez kopiranja baze, izgubićeš rezervacije.
- Email potvrde i admin linkovi koriste `APP_BASE_URL`, zato u produkciji mora biti postavljen na `https://dissrent.com`.
- Ako Resend domen još nije verifikovan, email slanje može raditi samo preko test sender adrese ili neće raditi uopšte, zavisno od naloga.
