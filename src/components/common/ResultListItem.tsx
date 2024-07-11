'use client';

import React from 'react';
import { twJoin } from 'tailwind-merge';
import { RollResult } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { DiceResultItem } from '@/src/components';

interface Props {
  resultItem: RollResult[];
}

export function ResultListItem({ resultItem, }: Props) {
  const css = {
    listItem: twJoin([
      `rounded-2 flex flex-col first:bg-black-500 bg-black-300 first:text-black-50 text-black-base`,
    ]),
    diceOne: twJoin([
      `rounded-2 p-4 pt-0 pb-0`,
    ]),
    formula: twJoin([
      `flex flex-row gap-1 items-center text-[140%] font-900`,
    ]),
    total: twJoin([
      `inline-flex flex-row gap-1 items-center text-[140%] font-900 px-2 bg-black-800 rounded-2 mt-1 text-black-50`,
    ]),
    diceList: twJoin([
      `m-4`,
    ]),
  };

  return (
    <div className={css.listItem}>
      {resultItem.map((item) => (
        <div key={nihilTool.common.uuid()} className='first:pt-4'>
          <div className={css.diceOne}>
            <div className={css.formula}>
              <Icon icon='iconoir:hexagon-dice' className='mt-[2px]' />
              <span>{item.formula}</span>
            </div>
            <div className={css.total}>
              <Icon icon='fa:arrow-right' className='mt-[2px]' />
              <span>{item.total}</span>
            </div>
          </div>

          <div className={css.diceList}>
            {item.dices.map((dice) => (
              <DiceResultItem key={nihilTool.common.uuid()} dice={dice} mod={item.mod} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
