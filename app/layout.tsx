import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghazal Bakery - Artisan Delights",
  description:
    "Premium artisan bakery offering handcrafted pastries, breads, and delectable treats made with the finest ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
