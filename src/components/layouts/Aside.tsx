'use client';

import React, { useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Nav } from '@/src/components';

interface Props {
  className?: ClassNameValue;
}

export function Aside({ className, }: Props) {
  const [ open, setOpen, ] = useState(false);

  const css = {
    default: twJoin([
      `bg-green-500 p-2`,
      className,
    ]),
    inside: twJoin([
      `bg-white w-[150px] h-full rounded-2 p-2`,
    ]),
  };

  return (
    <>
      <aside className={css.default}>
        <div className={css.inside}>
          <Nav />
        </div>
      </aside>
    </>
  );
}
