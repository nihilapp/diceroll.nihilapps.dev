'use client';

import React from 'react';
import Link from 'next/link';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue
}

export function Nav({ className, }: Props) {
  const css = {
    default: twJoin([
      `flex flex-col gap-1`,
      className,
    ]),
    link: twJoin([
      `p-1 bg-black-base text-white rounded-1 flex flex-row gap-1 items-center justify-center`,
    ]),
  };

  return (
    <>
      <nav className={css.default}>
        <Link href='/' className={css.link}>홈</Link>
        <Link href='/' className={css.link}>홈</Link>
      </nav>
    </>
  );
}
