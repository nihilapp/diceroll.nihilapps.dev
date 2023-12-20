import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import dicerollLogo from '@/src/images/diceroll-w.png';
import { NavBlock } from '@/src/components/Layout/NavBlock';

interface Props {
  styles?: ClassNameValue;
}

export function HeaderBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      `p-2 bg-black-700 border-b-2 border-black-base flex items-center justify-between`,
      styles,
    ]),
    image: twJoin([
      `h-[30px] w-auto`,
    ]),
  };

  return (
    <>
      <header className={css.default}>
        <Link href='/' as='/'>
          <Image
            src={dicerollLogo.src}
            alt='로고'
            width={dicerollLogo.width}
            height={dicerollLogo.height}
            priority
            className={css.image}
          />
        </Link>
        <NavBlock />
      </header>
    </>
  );
}
