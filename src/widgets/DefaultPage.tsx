'use client';

import React from 'react';
import { enableCache } from '@iconify/react';
import {
  AppMain, Aside, Footer, Header
} from '@/src/components';

enableCache('local');

interface Props {
  children: React.ReactNode;
}

export function DefaultPage({ children, }: Props) {
  return (
    <>
      <Header />

      <div className='flex flex-row flex-1 shrink-0 gap-2'>
        <Aside />

        <AppMain>
          {children}
        </AppMain>
      </div>

      <Footer />
    </>
  );
}
