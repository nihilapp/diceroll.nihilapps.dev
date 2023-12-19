import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Image from 'next/image';
import dicerollLogo from '@/src/images/diceroll-w.png';

interface Props {
  styles?: ClassNameValue;
}

export function HeaderBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      `p-2 bg-black-700 border-b-2 border-black-base`,
      styles,
    ]),
    image: twJoin([
      `h-[50px] w-auto`,
    ]),
  };

  return (
    <>
      <header className={css.default}>
        <Image
          src={dicerollLogo.src}
          alt='로고'
          width={dicerollLogo.width}
          height={dicerollLogo.height}
          priority
          className={css.image}
        />
      </header>
    </>
  );
}
