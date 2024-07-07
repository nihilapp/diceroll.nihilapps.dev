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
      ``,
      className,
    ]),
  };

  return (
    <>
      {nihilTool.common.string(resultItem)}
      <div className={css.default}>
        <div className='flex text-[140%] font-900'>
          <div className='inline-flex flex-row gap-1 items-center bg-black-500 pl-2 pr-1 rounded-l-2 text-white'>
            <Icon icon='iconoir:hexagon-dice' />
            <span>{formula}</span>
            <Icon icon='bxs:chevrons-right' className='mt-[2px]' />
          </div>
          <div className='pl-1 pr-2 rounded-r-2 bg-black-600 text-white'>{total}</div>
        </div>

        <div>
          {dices.map((dice) => (
            <DiceResultItem key={nihilTool.common.uuid()} dice={dice} />
          ))}
        </div>
      </div>
    </>
  );
}
