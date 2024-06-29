'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Icon } from '@iconify/react';
import { Logo, ToggleDarkMode } from '@/src/components';
import { commonStore, toggleSideOpen } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function Header({ className, }: Props) {
  const { sideOpen, } = commonStore();

  const onToggleSide = useCallback(
    () => {
      toggleSideOpen();
    },
    []
  );

  const css = {
    default: twJoin([
      `p-2 h-[60px] flex items-center justify-center rounded-2 box-content mb-2 select-none`,
      className,
    ]),
    header: twJoin([
      `p-2 bg-white w-full relative flex flex-row items-center justify-center rounded-2 border border-black-200 shadow-md dark:bg-black-base`,
    ]),
    button: twJoin([
      `flex flex-col absolute text-black-base dark:text-white mo-sm:flex mo-md:hidden z-[1] transition-colors duration-200 left-2 top-[30px] -translate-y-1/2 text-[150%] cursor-pointer`,
    ]),
  };

  return (
    <header className={css.default}>
      <div className={css.header}>
        <Logo />

        <div className={css.button} onClick={onToggleSide}>
          <Icon icon='material-symbols:menu' />
          <button aria-label='메뉴토글'>
            {!sideOpen && (
              <Icon icon='ri:toggle-line' className='-mt-2' />
            )}

            {sideOpen && (
              <Icon icon='ri:toggle-fill' className='-mt-2' />
            )}
          </button>
        </div>

        <ToggleDarkMode />
      </div>
    </header>
  );
}
