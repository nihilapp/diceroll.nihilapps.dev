'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
  children: React.ReactNode;
}

export function Heading2({ className, children, }: Props) {
  const css = {
    default: twJoin([
      `mb-4 text-[120%] font-900 p-2 border-l-[15px] border-red-500 bg-black-base text-white dark:bg-white dark:text-black-base rounded-r-2`,
      className,
    ]),
  };

  return (
    <>
      <h2 className={css.default}>{children}</h2>
    </>
  );
}
