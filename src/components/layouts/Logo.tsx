'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { logo, logoWhite } from '@/src/images';
import { commonStore } from '@/src/entities';
import dark = toast.dark;

interface Props {
  className?: ClassNameValue;
}

export function Logo({ className, }: Props) {
  const { darkMode, } = commonStore();

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
    image: twJoin([
      `h-[40px] w-auto`,
    ]),
  };

  return (
    <>
      <h1 className={css.default}>
        <Link href='/' as='/'>
          {darkMode ? (
            <Image
              src={logoWhite.src}
              alt='DiceRoll Logo'
              width={100}
              height={100}
              priority
              className={css.image}
            />
          ) : (
            <Image
              src={logo.src}
              alt='DiceRoll Logo'
              width={100}
              height={100}
              priority
              className={css.image}
            />
          )}
        </Link>
      </h1>
    </>
  );
}
