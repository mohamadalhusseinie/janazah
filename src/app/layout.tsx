import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Janazah Platform',
  description: 'Meldungen und Benachrichtigungen für Janazah in deiner Stadt.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
