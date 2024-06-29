'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
  children: React.ReactNode;
  isLast?: boolean;
}

export function P({ className, children, isLast, }: Props) {
  const css = {
    default: twJoin([
      `text-justify mb-4`,
      isLast && `mb-0`,
      className,
    ]),
  };

  return (
    <>
      <p className={css.default}>{children}</p>
    </>
  );
}
