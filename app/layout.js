import Footer from '@components/footer';
import Header from '@components/header';
import '@styles/globals.scss';
import { Noto_Sans } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Yuko Horita - Fullstack Developer',
  description: `Yuko Horita's personal website including projects`,
  favicon: '/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
