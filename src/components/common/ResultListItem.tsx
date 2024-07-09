'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { RollResult } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { DiceResultItem } from '@/src/components';

interface Props {
  className?: ClassNameValue;
  resultItem: RollResult[];
}

export function ResultListItem({ className, resultItem, }: Props) {
  const {
    formula, total, dices, mod,
  } = resultItem[0];

  const css = {
    default: twJoin([
      `p-2 border-2 border-black-400 rounded-2 border-b-2`,
      className,
    ]),
    total: twJoin([
      `inline-flex flex-row items-center font-900 px-2 rounded-1 bg-black-500 text-black-50 gap-1 border-2 border-black-400`,
    ]),
    formulaBox: twJoin([
      `border-b-2 border-black-200 pb-2 mb-2`,
    ]),
    formula: twJoin([
      `flex flex-row items-center text-[140%] font-900 mb-1 gap-1`,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <div className={css.formulaBox}>
          <div className={css.formula}>
            <Icon icon='iconoir:hexagon-dice' className='mt-[2px]' />
            <span>{formula}</span>
          </div>
          <div className='text-[140%] flex flex-row items-center gap-2 font-900'>
            <span className={css.total}>{total}</span>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          {dices.map((dice) => (
            <DiceResultItem key={nihilTool.common.uuid()} dice={dice} />
          ))}
        </div>
      </div>
    </>
  );
}
