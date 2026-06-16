import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./showcase.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Duolingo — Leer talen op een leuke manier",
  description:
    "Ontdek nieuwe Duolingo features: karakter builder, gratis proefles, team contests en meer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
