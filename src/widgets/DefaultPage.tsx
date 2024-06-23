import React from 'react';
import {
  AppMain, Aside, Footer, Header
} from '@/src/components';

interface Props {
  children: React.ReactNode;
}

export function DefaultPage({ children, }: Props) {
  return (
    <>
      <Header />

      <div className='flex flex-row flex-1 shrink-0'>
        <Aside />

        <AppMain>
          {children}
        </AppMain>
      </div>

      <Footer />
    </>
  );
}
