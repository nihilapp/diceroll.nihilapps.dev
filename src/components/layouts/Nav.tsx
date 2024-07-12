'use client';

import React from 'react';
import Link from 'next/link';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { DiceIcon, HomeIcon, PageLink } from '@/src/components';

interface Props {
  className?: ClassNameValue
}

export function Nav({ className, }: Props) {
  const css = {
    default: twJoin([
      `flex flex-col gap-2`,
      className,
    ]),
  };

  return (
    <>
      <nav className={css.default}>
        <PageLink link='/' icon={<HomeIcon />}>설명서</PageLink>
        <PageLink link='/preset' icon={<DiceIcon />}>기본 주사위</PageLink>
        <PageLink link='/custom' icon={<DiceIcon />}>커스텀 주사위</PageLink>
      </nav>
    </>
  );
}
