import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";

const headingFont = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dissrent.com"),
  title: {
    default: "Rent a Car Banjaluka | DISS RENT",
    template: "%s | DISS RENT",
  },
  description:
    "Rent a car u Banjaluci bez depozita. DISS RENT nudi premium i ekonomicna vozila, jasne cijene i brzu online rezervaciju.",
  keywords: [
    "rent a car banjaluka",
    "rent a car u banjaluci",
    "najam vozila banjaluka",
    "iznajmljivanje auta banjaluka",
    "diss rent",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rent a Car Banjaluka | DISS RENT",
    description:
      "Premium rent a car u Banjaluci sa jasnim cijenama, bez depozita i brzom online rezervacijom.",
    url: "https://dissrent.com",
    siteName: "DISS RENT",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "/1.jpg",
        width: 1200,
        height: 630,
        alt: "DISS RENT vozilo u Banjaluci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent a Car Banjaluka | DISS RENT",
    description:
      "Premium rent a car u Banjaluci sa jasnim cijenama, bez depozita i brzom online rezervacijom.",
    images: ["/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
