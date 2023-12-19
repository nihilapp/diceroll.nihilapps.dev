import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

export function FooterBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <footer className={css.default}>content</footer>
    </>
  );
}
