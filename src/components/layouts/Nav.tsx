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
        <Link href='/preset' className={css.link}>기본 주사위</Link>
        <Link href='/custom' className={css.link}>커스텀 주사위</Link>
      </nav>
    </>
  );
}
