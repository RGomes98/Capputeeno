import { Saira, Saira_Stencil_One } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.scss';

const saira = Saira({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  fallback: ['system-ui', 'sans-serif'],
});

export const sairaStencilOne = Saira_Stencil_One({
  display: 'swap',
  style: 'normal',
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno Frontend Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={saira.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
