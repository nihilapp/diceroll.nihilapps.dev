'use client';

import React from 'react';
import { enableCache } from '@iconify/react';
import { usePathname } from 'next/navigation';
import {
  AppMain, Aside, Footer, GoogleAD, Header
} from '@/src/components';

enableCache('local');

interface Props {
  children: React.ReactNode;
}

export function DefaultPage({ children, }: Props) {
  const pathname = usePathname();

  const pathnameCond = (pathname === '/custom') || (pathname === '/preset');

  return (
    <>
      <Header />

      <div className='flex flex-row flex-1 shrink-0 gap-2 overflow-y-auto'>
        <Aside />

        <AppMain>
          <GoogleAD />

          {pathnameCond ? (
            <>{children}</>
          ) : (
            <div className='white-block p-4'>
              {children}
            </div>
          )}
        </AppMain>
      </div>

      <Footer />
    </>
  );
}
