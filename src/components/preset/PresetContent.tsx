'use client';

import React, { useEffect } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { RollButton, SelectFormula } from '@/src/components';
import { setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function PresetContent({ className, }: Props) {
  useEffect(() => {
    setFormulaString('D2');
  }, []);

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
    button: twJoin([
      ``,
    ]),
  };

  return (
    <>
      <div>
        <SelectFormula />
        <RollButton />
      </div>

    </>
  );
}
