import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORM | Главная",
  description: "NORM и его биография",
  authors: [{name: 'Smorfy', url: 'https://smorfy.org'}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
