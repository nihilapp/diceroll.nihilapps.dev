'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Nav } from '@/src/components';
import { commonStore } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function Aside({ className, }: Props) {
  const { sideOpen, } = commonStore();

  const css = {
    default: twJoin([
      `p-2 hidden mo-sm:hidden mo-md:block`,
      className,
    ]),
    inside: twJoin([
      `bg-green-500 w-[150px] rounded-2 p-2`,
    ]),
    moSide: twJoin([
      `absolute z-10 -left-full transition-[left] duration-200 p-2`,
      sideOpen && `!left-0`,
    ]),
    menuTitle: twJoin([
      `mb-2 text-center font-900 text-[140%]`,
    ]),
  };

  return (
    <>
      <aside className={css.default}>
        <div className={css.inside}>
          <h2 className={css.menuTitle}>메뉴</h2>

          <Nav />
        </div>
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
