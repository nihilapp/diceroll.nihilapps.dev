'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';

interface Props {
  className?: ClassNameValue;
}

export function Logo({ className, }: Props) {
  // const { darkMode, } = commonStore();

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
    image: twJoin([
      `h-[35px] w-auto`,
    ]),
  };

  return (
    <>
      <h1 className={css.default}>
        <Link href='/' as='/'>
          Logo
        </Link>
      </h1>
    </>
  );
}
