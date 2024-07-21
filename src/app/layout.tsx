import { metadata } from '@/constants';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name='description'>{metadata.description}</meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

