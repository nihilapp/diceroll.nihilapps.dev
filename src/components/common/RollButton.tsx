'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice } from '@nihilapp/dice';
import { addRollResult, diceStore } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function RollButton({ className, }: Props) {
  const { formulaString, rollResults, } = diceStore();

  const onClickRoll = useCallback(
    () => {
      const result = Dice.rollToFormula({
        formula: formulaString,
      });

      addRollResult(result);
    },
    [ formulaString, ]
  );

  console.log('rollResults >> ', rollResults);

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <button
        type='button'
        className={css.default}
        onClick={onClickRoll}
      >
        굴리기
      </button>
    </>
  );
}
