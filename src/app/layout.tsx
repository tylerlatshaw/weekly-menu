import type { Metadata } from "next";
import "./globals.css";
import { appSettings } from "../../app-settings";

export const metadata: Metadata = {
  metadataBase: new URL(appSettings.baseUrl!),
  alternates: {
    canonical: "/",
  },
  title: appSettings.projectTitle,
  description: appSettings.description,
  generator: "Next.js",
  applicationName: appSettings.projectTitle,
  keywords: ["Dinner Menu", "Menu Creator", "Weekly Dinner Menu"],
  authors: [{
    name: appSettings.author.name,
    url: appSettings.author.url
  }],
  creator: appSettings.author.name,
  publisher: appSettings.author.name,
  openGraph: {
    title: appSettings.projectTitle,
    description: appSettings.description,
    url: appSettings.baseUrl,
    siteName: appSettings.projectTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: appSettings.projectTitle,
    description: appSettings.description,
    creator: "@tylerlatshaw"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
