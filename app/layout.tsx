import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Gabriel - thesomewhatyou | Portfolio",
  description: "Minecraft Modpack Developer • Content Creator • Open Source Enthusiast. I make Minecraft things and build tools that make a difference in the community.",
  keywords: ["Gabriel", "thesomewhatyou", "Minecraft", "Modpack", "Developer", "Open Source", "TOSCR", "OptimiHost"],
  authors: [{ name: "Gabriel (thesomewhatyou)" }],
  openGraph: {
    title: "Gabriel - thesomewhatyou | Portfolio",
    description: "Minecraft Modpack Developer • Content Creator • Open Source Enthusiast",
    type: "website",
    url: "https://thesomewhatyou.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel - thesomewhatyou | Portfolio",
    description: "Minecraft Modpack Developer • Content Creator • Open Source Enthusiast",
    creator: "@thesomewhatyou",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
