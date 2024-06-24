import React from 'react';
import { Metadata } from 'next';
import '@/src/styles/tailwind.css';
import '@/src/styles/shadcn.styles.css';
import { twJoin } from 'tailwind-merge';
import { configData } from '@/src/data';

export const metadata: Metadata = {
  metadataBase: new URL(configData.url),
  title: {
    template: `%s - ${configData.title}`,
    default: configData.title,
  },
  description: configData.description,
  keywords: configData.keywords,
  authors: {
    name: configData.author.name,
    url: configData.author.url,
  },
  generator: 'Jetbrains Webstorm',
  openGraph: {
    title: 'home',
    description: configData.description,
    locale: 'ko_KR',
    type: 'website',
    siteName: configData.title,
    url: configData.url,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1920,
        height: 1080,
        alt: 'site image',
      },
    ],
  },
  alternates: {
    canonical: configData.url,
  },
};

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children, }: Props) {
  const css = {
    default: twJoin([
      `w-screen h-screen overflow-y-hidden overflow-x-hidden flex flex-col text-middle`,
    ]),
  };

  return (
    <html lang='ko' suppressHydrationWarning>
      <body suppressHydrationWarning className={css.default}>
        {children}
      </body>
    </html>
  );
}
