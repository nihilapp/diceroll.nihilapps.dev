'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
  children: React.ReactNode;
}

export function Formula({ className, children, }: Props) {
  const css = {
    default: twJoin([
      `font-900 text-red-500`,
      className,
    ]),
  };

  return (
    <>
      <span className={css.default}>{children}</span>
    </>
  );
}
