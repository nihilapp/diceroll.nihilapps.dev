'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { setSideOpen } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
  children: React.ReactNode;
}

export function AppMain({ className, children, }: Props) {
  const onCloseSide = useCallback(
    () => {
      setSideOpen(false);
    },
    []
  );

  const css = {
    default: twJoin([
      `bg-black-base text-white flex-1 shrink-0 p-2 relative`,
      className,
    ]),
  };

  return (
    <>
      <main className={css.default} onClick={onCloseSide}>
        {children}
      </main>
    </>
  );
}
