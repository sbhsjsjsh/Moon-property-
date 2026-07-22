import type {Metadata} from 'next';
import './globals.css'; // Global styles
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Moon Property Sihi Gurugram | Trusted Real Estate in Sihi',
  description: 'Find verified flats, plots, apartments, and commercial properties in Sihi, Gurugram with Moon Property at affordable prices and trusted property deals.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
