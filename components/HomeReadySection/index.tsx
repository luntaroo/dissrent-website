import React from "react";
import {
  Section,
  Inner,
  Header,
  Eyebrow,
  Title,
  Text,
  Cards,
  Card,
  CardTitle,
  CardText,
  CardKicker,
  Strip,
  StripItem,
  FinalNote,
} from "./styles";

export default function HomeReadySection() {
  return (
    <Section>
      <Inner>
        <Header>
          <Eyebrow>Kako funkcionise</Eyebrow>
          <Title>Rezervacija u 4 jednostavna koraka.</Title>
          <Text>
            Od prvog odabira datuma do potvrde na email, cijeli proces je brz, jasan i prilagodjen
            gostima koji zele rezervaciju bez komplikacija.
          </Text>
        </Header>

        <Cards>
          <Card>
            <CardKicker>01</CardKicker>
            <CardTitle>Odaberite termin</CardTitle>
            <CardText>
              Odaberite datume i odmah pogledajte koja su vozila dostupna za vas termin.
            </CardText>
          </Card>
          <Card>
            <CardKicker>02</CardKicker>
            <CardTitle>Uporedite vozila</CardTitle>
            <CardText>
              Uporedite dnevne tarife, popuste i osnovne informacije kako biste lako izabrali pravo
              vozilo.
            </CardText>
          </Card>
          <Card>
            <CardKicker>03</CardKicker>
            <CardTitle>Posaljite rezervaciju</CardTitle>
            <CardText>
              Popunite kontakt podatke i posaljite rezervaciju za svega nekoliko minuta.
            </CardText>
          </Card>
          <Card>
            <CardKicker>04</CardKicker>
            <CardTitle>Potvrdite email</CardTitle>
            <CardText>
              Nakon potvrde na email, rezervacija je evidentirana i spremna za dogovor oko preuzimanja
              vozila.
            </CardText>
          </Card>
        </Cards>

        <Strip>
          <StripItem>Bez depozita</StripItem>
          <StripItem>Transparentne tarife</StripItem>
          <StripItem>Potvrda emailom</StripItem>
          <StripItem>Viber i SMS kontakt</StripItem>
          <StripItem>Brza korisnicka podrska</StripItem>
        </Strip>

        <FinalNote>Za duzi najam ili posebnu lokaciju preuzimanja, javite nam se direktno i pripremicemo ponudu.</FinalNote>
      </Inner>
    </Section>
  );
}
