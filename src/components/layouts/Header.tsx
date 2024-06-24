'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Icon } from '@iconify/react';
import { Logo } from '@/src/components';
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
      `bg-blue-200 p-2 h-[50px] flex items-center justify-center`,
      className,
    ]),
    button: twJoin([
      `flex flex-row gap-1 absolute text-black-base mo-sm:flex mo-md:hidden z-[1] transition-colors duration-200 left-2 top-[25px] -translate-y-1/2 text-[180%]`,
    ]),
  };

  return (
    <header className={css.default}>
      <Logo />

      <div className={css.button}>
        <Icon icon='material-symbols:menu' />
        <button onClick={onToggleSide} aria-label='메뉴토글'>
          {!sideOpen && (
            <Icon icon='ri:toggle-line' />
          )}

          {sideOpen && (
            <Icon icon='ri:toggle-fill' />
          )}
        </button>
      </div>
    </header>
  );
}
