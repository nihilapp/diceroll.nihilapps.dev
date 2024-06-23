import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
  children: React.ReactNode;
}

export function AppMain({ className, children, }: Props) {
  const css = {
    default: twJoin([
      `bg-black-base text-white flex-1 shrink-0 overflow-x-scroll p-2`,
      className,
    ]),
  };

  return (
    <>
      <main className={css.default}>{children}</main>
    </>
  );
}
