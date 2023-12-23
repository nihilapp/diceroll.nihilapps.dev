import React from 'react';
// eslint-disable-next-line camelcase
import { Noto_Sans_KR } from 'next/font/google';
import { Metadata } from 'next';
import { configData } from '@/src/data';
import '@/src/styles/tailwind.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from '@/src/layouts';
import {
  FooterBlock, HeaderBlock, MainBlock, NavBlock
} from '@/src/components/Layout';

const notoSansKR = Noto_Sans_KR({
  subsets: [ 'latin', ],
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900', ],
});

export const metadata: Metadata = {
  metadataBase: new URL(configData.url),
  title: {
    default: `home - ${configData.title}`,
    template: `%s - ${configData.title}`,
  },
  description: configData.description,
  keywords: configData.keywords,
  authors: {
    name: configData.author.name,
    url: configData.author.url,
  },
  generator: 'MS Visual Studio Code',
  openGraph: {
    title: 'home',
    description: configData.description,
    locale: 'ko_KR',
    type: 'website',
    siteName: configData.title,
    url: configData.url,
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: configData.url,
  },
};

interface Props {
  children: React.ReactNode;
}

export default function layout({ children, }: Props) {
  return (
    <html lang='ko'>
      <body className={notoSansKR.className}>
        <Providers>
          <HeaderBlock />
          <MainBlock>
            {children}
          </MainBlock>
          <FooterBlock />
        </Providers>
      </body>
    </html>
  );
}
