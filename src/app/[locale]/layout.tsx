import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageModal from '@/components/LanguageModal';
import type { Metadata } from 'next';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Josue Covarrubias | Full-Stack Web Developer',
  description: 'Full-stack web developer specializing in React, Next.js, and NestJS. Building modern, scalable web applications for startups and businesses.',
  keywords: ['web developer', 'full-stack developer', 'React', 'Next.js', 'NestJS', 'TypeScript', 'web development', 'Bolivia'],
  authors: [{ name: 'Josue Covarrubias' }],
  creator: 'Josue Covarrubias',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://josuecovarrubias.com',
    title: 'Josue Covarrubias | Full-Stack Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, and NestJS. Building modern, scalable web applications.',
    siteName: 'Josue Covarrubias Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Covarrubias | Full-Stack Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, and NestJS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <LanguageModal />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
