'use client';

import React, { useCallback, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { presetStore, setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
  formula: string;
}

export function SelectItem({ className, formula, }: Props) {
  const { formulaString, } = presetStore();

  console.log('formulaString >> ', formulaString);

  const onClickRoll = useCallback(
    (formula: string) => {
      setFormulaString(formula);
    },
    []
  );

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <div
        className={css.default}
        onClick={() => onClickRoll(formula)}
      >
        {formula}
      </div>
    </>
  );
}
