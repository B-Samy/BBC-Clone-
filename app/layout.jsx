import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import {  ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BBC News - Breaking News, Latest News and Videos',
  description: 'Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives.',
};

export default function RootLayout({ children }) {
  return (

     <ClerkProvider>


    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
     </ClerkProvider>
  );
}
