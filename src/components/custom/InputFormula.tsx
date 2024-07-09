'use client';

import React, { useCallback, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { useInput } from '@/src/hooks';
import { diceStore, setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function InputFormula({ className, }: Props) {
  const { formulaString, } = diceStore();

  const onChangeFormula = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormulaString(event.target.value);
    },
    []
  );

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
    input: twJoin([
      `border-2 border-black-500 rounded-2 flex-1 shrink-0 bg-black-500 text-black-50 text-center placeholder:text-black-50 dark:border-black-400 py-2`,
    ]),
  };

  return (
    <>
      <input
        type='text'
        value={formulaString}
        onChange={onChangeFormula}
        placeholder='주사위식을 입력하세요.'
        className={css.input}
      />
    </>
  );
}
