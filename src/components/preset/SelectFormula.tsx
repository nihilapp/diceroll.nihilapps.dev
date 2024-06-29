'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { SelectItem } from '@/src/components';

interface Props {
  className?: ClassNameValue;
}

export function SelectFormula({ className, }: Props) {
  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        {Dice.preset().map((item) => (
          <SelectItem key={nihilTool.common.uuid()} formula={item} />
        ))}
      </div>
    </>
  );
}
