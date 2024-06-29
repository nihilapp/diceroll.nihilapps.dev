'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { GoogleAD, Nav } from '@/src/components';
import { commonStore } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function Aside({ className, }: Props) {
  const { sideOpen, } = commonStore();

  const css = {
    default: twJoin([
      `p-2 hidden mo-sm:hidden mo-md:block pt-0 text-black-base`,
      className,
    ]),
    inside: twJoin([
      `w-[300px] white-block`,
    ]),
    moSide: twJoin([
      `absolute z-10 -left-full transition-[left] duration-200 p-2 pt-0`,
      sideOpen && `!left-0`,
    ]),
    menuTitle: twJoin([
      `mb-4 font-900 text-[120%] ml-1 border-b-2 border-black-200 pb-4 leading-none mt-1`,
    ]),
  };

  return (
    <>
      <aside className={css.default}>
        <div className={css.inside}>
          <h2 className={css.menuTitle}>메뉴</h2>

          <Nav />
        </div>

        <GoogleAD isSide />
      </aside>

      <aside className={css.moSide}>
        <div className={css.inside}>
          <h2 className={css.menuTitle}>메뉴</h2>

          <Nav />
        </div>
      </aside>
    </>
  );
}
