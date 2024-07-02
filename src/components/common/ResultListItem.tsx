'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { RollResult } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';

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
      <div className={css.default}>
        {nihilTool.common.string(resultItem)}

        <div>
          <div className='text-[150%] font-900 flex flex-col gap-1 bg-black-500 text-white p-1 rounded-t-2 border-2 border-black-500 dark:border-black-400'>
            <div className='flex flex-row gap-2 items-center'>
              <Icon icon='iconoir:hexagon-dice' />
              <span>{formula}</span>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <Icon icon='bxs:chevrons-right' />
              <span>{total}</span>
            </div>
          </div>
          <div className='text-[130%] font-900 p-1 text-center border-2 border-t-0 border-black-500 dark:border-black-400 bg-black-500' />
        </div>
      </div>
    </>
  );
}
