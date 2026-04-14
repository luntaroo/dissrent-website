import DissRentPage from "@/components/DissRentPage";
import db from "@/lib/db";
import { CAR_DATA } from "@/lib/carData";
import { buildCarAvailabilityMap } from "@/lib/availability";
import { getTodayDateString } from "@/lib/booking";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rent a Car Banjaluka bez depozita",
  description:
    "Rezervisite rent a car u Banjaluci online. Premium i ekonomicna vozila, bez depozita, sa email potvrdom i transparentnim cijenama.",
};

export default async function Home() {
  const availabilityByCar = await buildCarAvailabilityMap(
    CAR_DATA,
    (carImg) => db.getBlockedDatesForCar(carImg),
    1,
    getTodayDateString()
  );

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "DISS RENT",
    url: "https://dissrent.com",
    telephone: "+38765626444",
    email: "rent@diss.com",
    areaServed: "Banjaluka",
    priceRange: "60-150 KM",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banjaluka",
      addressCountry: "BA",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <DissRentPage availabilityByCar={availabilityByCar} />
    </>
  );
}
