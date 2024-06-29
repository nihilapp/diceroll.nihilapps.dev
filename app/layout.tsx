import React from 'react';
import { Metadata } from 'next';
import '@/src/styles/tailwind.css';
import '@/src/styles/shadcn.styles.css';
import { twJoin } from 'tailwind-merge';
import { configData } from '@/src/data';
import { DefaultPage } from '@/src/widgets';

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
        url: `${configData.url}/opengraph-image.png`,
        width: 1920,
        height: 1080,
        alt: 'site image',
      },
      {
        url: `${configData.url}/twitter-image.png`,
        width: 1920,
        height: 1080,
        alt: 'twitter site image',
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
      `h-screen overflow-y-hidden overflow-x-hidden flex flex-col text-middle bg-black-100 w-full mo-sm:w-full mo-md:max-w-[900px] mo-lg:w-[900px] mx-auto font-500`,
    ]),
  };

  return (
    <html lang='ko'>
      <body className={css.default}>
        <DefaultPage>
          {children}
        </DefaultPage>
      </body>
    </html>
  );
}
