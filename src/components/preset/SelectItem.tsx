'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
  formula: string;
  setIsOpen: any;
}

export function SelectItem({ className, formula, setIsOpen, }: Props) {
  const onClickRoll = useCallback(
    (formula: string) => {
      setFormulaString(formula);
      setIsOpen(false);
    },
    []
  );

  const css = {
    default: twJoin([
      `cursor-pointer`,
      className,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <div
          className='h-[30px] bg-black-100 hover:bg-black-200 flex items-center justify-center rounded-2'
          onClick={() => onClickRoll(formula)}
        >
          {formula}
        </div>
      </div>
    </>
  );
}
