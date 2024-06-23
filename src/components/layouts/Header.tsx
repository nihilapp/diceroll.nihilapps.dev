'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Logo, Nav } from '@/src/components';

interface Props {
  className?: ClassNameValue;
}

export function Header({ className, }: Props) {
  const css = {
    default: twJoin([
      `bg-blue-200 p-2 text-center`,
      className,
    ]),
  };

  return (
    <header className={css.default}>
      <Logo />
    </header>
  );
}
