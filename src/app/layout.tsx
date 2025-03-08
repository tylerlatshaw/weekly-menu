import type { Metadata } from "next";
import "./globals.css";
import { appSettings } from "../../app-settings";
import dayjs from "dayjs";
import Link from "next/link";
import { Prompt } from "next/font/google";

export const metadata: Metadata = {
  title: appSettings.projectTitle,
  description: appSettings.description,
  authors: {
    name: appSettings.author.name,
    url: appSettings.author.url
  }
};

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <footer className={"flex flex-col place-self-center pb-6 gap-2 items-center text-white " + prompt.className}>
          <span>
            &copy; {dayjs().year()} <Link href={appSettings.author.url} target="_blank">{appSettings.author.name}</Link>. All rights reserved.
          </span>
          <span className="text-sm">
            Image by <Link href="https://pixabay.com/users/merinthurasang77-5404727/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209" target="_blank">merinthurasang77</Link> from <Link href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2325209" target="_blank">Pixabay</Link>
          </span>
        </footer>
      </body>
    </html>
  );
}
