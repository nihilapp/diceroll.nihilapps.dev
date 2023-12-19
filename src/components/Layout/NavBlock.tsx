import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';

interface Props {
  styles?: ClassNameValue;
}

export function NavBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <nav className={css.default}>
        <Link href='/'>홈</Link>
        <Link href='/example'>예시</Link>
      </nav>
    </>
  );
}
