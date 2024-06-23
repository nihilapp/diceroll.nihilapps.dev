import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
}

export function Footer({ className, }: Props) {
  const css = {
    default: twJoin([
      `bg-gold-300 p-2 text-center`,
      className,
    ]),
  };

  return (
    <>
      <footer className={css.default}>Footer</footer>
    </>
  );
}
