import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { firm } from "@/lib/site";
import "./globals.css";

const body = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(firm.siteUrl),
  title: {
    default: `${firm.name} | Attorneys & Fiduciary Specialists in Gauteng`,
    template: `%s | ${firm.name}`,
  },
  description:
    "Director-led attorneys and deceased-estate specialists with offices in Johannesburg CBD, Roodepoort and Springs. Litigation, corporate, family and property law.",
  icons: { icon: "/images/logo-emblem.png" },
  // Preview build: keep search engines out until the firm approves the switch.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#12213b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={body.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
