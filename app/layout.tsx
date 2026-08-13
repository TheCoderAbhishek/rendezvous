import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { JourneyProvider } from "./lib/journey-context";
import { THEME_INIT_SCRIPT } from "./lib/theme-context";
import HeartField from "./components/HeartField";
import SiteHeader from "./components/SiteHeader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rendezvous — Would You Like to Meet?",
  description:
    "A quiet, romantic invitation. Answer one question, choose the where and when, and send it with a single tap.",
  openGraph: {
    title: "Rendezvous — Would You Like to Meet?",
    description:
      "A quiet, romantic invitation. Answer one question, choose the where and when, and send it with a single tap.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1013" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        <JourneyProvider>
          <HeartField />
          <SiteHeader />
          {children}
        </JourneyProvider>
      </body>
    </html>
  );
}
