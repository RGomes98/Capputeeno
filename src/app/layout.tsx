import { ContextProvider } from '@/context/Context';
import { Navbar } from '@/components/Navbar/Navbar';
import { Saira } from 'next/font/google';
import type { Metadata } from 'next';

import '../stylesheets/globals.scss';

const saira = Saira({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno Frontend Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider>
      <html lang='pt-BR'>
        <body className={saira.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ContextProvider>
  );
}
