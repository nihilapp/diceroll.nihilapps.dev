'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice, RollError, RollResult } from '@nihilapp/dice';
import {
  addRollResult, diceStore, setDiceMessage
} from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function RollButton({ className, }: Props) {
  const { formulaString, rollType, } = diceStore();

  const onClickRoll = useCallback(
    () => {
      if (!formulaString) {
        setDiceMessage('주사위식을 입력하세요.');
        return;
      }

      const result = Dice.rollToFormula({
        formula: formulaString,
        mode: rollType,
      });

      if ('errorNumber' in (result as RollError)) {
        setDiceMessage((result as RollError).errorMessage);
        return;
      }

      addRollResult(result as RollResult[]);
    },
    [ formulaString, rollType, ]
  );

  const css = {
    default: twJoin([
      `bg-black-500 text-black-50 p-2 rounded-2 hover:bg-black-600 asd border-2 border-black-500 hover:border-black-600 dark:border-black-400 dark:hover:border-black-400`,
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
