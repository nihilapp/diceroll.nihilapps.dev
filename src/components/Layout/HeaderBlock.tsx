import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import dicerollLogo from '@/src/images/diceroll-w.png';

interface Props {
  styles?: ClassNameValue;
}

export function HeaderBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      `bg-black-700 flex flex-col items-center justify-between`,
      styles,
    ]),
    image: twJoin([
      `h-[40px] w-auto mx-auto`,
    ]),
    container: twJoin([
      `w-full mf-sm:w-full mf-md:w-full mf-md:max-w-[900px] mf-lg:w-[900px] mx-auto p-2`,
    ]),
  };

  return (
    <>
      <header className={css.default}>
        <div className={css.container}>
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
        </div>
        {/*<div className={twJoin(css.container, `bg-black-600`)}>*/}
        {/*  <NavBlock />*/}
        {/*</div>*/}
      </header>
    </>
  );
}
