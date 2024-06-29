'use client';

import React from 'react';
import Link from 'next/link';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { PageLink } from '@/src/components';

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
        <PageLink link='/preset' icon='iconoir:hexagon-dice'>기본 주사위</PageLink>
        <PageLink link='/custom' icon='iconoir:hexagon-dice'>커스텀 주사위</PageLink>
      </nav>
    </>
  );
}
