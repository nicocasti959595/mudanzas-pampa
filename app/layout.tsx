import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandFull} — Fletes y mudanzas en CABA y GBA`,
    template: `%s | ${site.brandFull}`,
  },
  description:
    "Fletes y mudanzas en CABA y Gran Buenos Aires. Mudanzas de casas, departamentos y oficinas con embalaje, armado de muebles, guardamuebles e izaje por balcón. Presupuesto sin cargo y personal asegurado.",
  keywords: [
    "fletes",
    "mudanzas",
    "empresa de mudanzas",
    "mudanzas CABA",
    "fletes Buenos Aires",
    "mudanzas de oficina",
    "guardamuebles",
    "embalaje de mudanza",
    "izaje por balcón",
    "mudanzas al interior",
  ],
  authors: [{ name: site.brandFull }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brandFull,
    title: `${site.brandFull} — Fletes y mudanzas sin estrés`,
    description:
      "Mudanzas de hogar y oficina en CABA y GBA. Embalaje, armado de muebles, guardamuebles y mudanzas al interior. Personal asegurado y presupuesto sin cargo.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandFull} — Fletes y mudanzas en CABA y GBA`,
    description:
      "Mudanzas rápidas y prolijas con embalaje, armado y camiones propios. Presupuesto sin cargo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Moving Company",
};

export const viewport: Viewport = {
  themeColor: "#110d18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
