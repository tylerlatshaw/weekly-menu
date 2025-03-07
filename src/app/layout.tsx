import type { Metadata } from "next";
import "./globals.css";
import { appSettings } from "../../app-settings";

export const metadata: Metadata = {
  title: appSettings.projectTitle,
  description: appSettings.description,
  authors: {
    name: appSettings.author.name,
    url: appSettings.author.url
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

        <footer className="place-self-center row-start-3 flex mb-6 flex-wrap items-center justify-center">
          <span>
            Image by <a href="https://pixabay.com/users/merinthurasang77-5404727/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209">merinthurasang77</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209">Pixabay</a>
          </span>
        </footer>
      </body>
    </html>
  );
}
