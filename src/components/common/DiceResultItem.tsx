'use client';

import React, { useMemo } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { DiceResult } from '@nihilapp/dice';

interface Props {
  className?: ClassNameValue;
  dice: DiceResult;
}

export function DiceResultItem({ className, dice, }: Props) {
  const {
    formula, total, result, ignore,
  } = dice;

  const diceNumber = useMemo(
    () => {
      return formula.split('D').at(-1);
    },
    [ formula, ]
  );

  const isCritical = (dice: number) => {
    return;
  };

  const isFumble = () => {
  };

  const css = {
    default: twJoin([
      `flex flex-row`,
      className,
    ]),
  };

  return (
    <>
      <div key={nihilTool.common.uuid()} className={css.default}>
        <div className='flex flex-row items-center'>
          <Icon icon='iconoir:hexagon-dice' />
          <span>{formula}</span>
          <Icon icon='bxs:chevrons-right' className='mt-[2px]' />
        </div>
        <div>{total}</div>
      </div>
    </>
  );
}
