'use client';

import React from 'react';
import { twJoin } from 'tailwind-merge';
import { RollResult } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { ArrowRightIcon, DiceIcon, DiceResultItem } from '@/src/components';

interface Props {
  resultItem: RollResult[];
}

export function ResultListItem({ resultItem, }: Props) {
  const css = {
    listItem: twJoin([
      `rounded-2 flex flex-col bg-black-500 text-black-50 border-[5px] border-black-500 first:border-red-500`,
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
      `m-4 flex flex-col gap-2`,
    ]),
    modItem(item: number) {
      return twJoin([
        `inline-block px-3 rounded-1 text-white border-2 mb-1 mr-1`,
        item > 0 && `bg-green-600 border-green-600`,
        item < 0 && `bg-red-500 border-red-500`,
      ]);
    },
    mod: twJoin([
      `bg-white rounded-2 text-black-base p-2 pb-1`,
    ]),
  };

  return (
    <div className={css.listItem}>
      {resultItem.map((item) => (
        <div key={nihilTool.common.uuid()} className='first:pt-4'>
          <div className={css.diceOne}>
            <div className={css.formula}>
              <DiceIcon />
              <span>{item.formula}</span>
            </div>
            <div className={css.total}>
              <ArrowRightIcon />
              <span>{item.total}</span>
            </div>
          </div>

          <div className={css.diceList}>
            {item.dices.map((dice) => (
              <DiceResultItem key={nihilTool.common.uuid()} dice={dice} mod={item.mod} />
            ))}
          </div>

          {item.mod.length !== 0 && (
            <div className='bg-black-600 rounded-2 p-4 m-4 text-black-50'>
              <div className='mb-1'>보정</div>
              <div className={css.mod}>
                {item.mod.map((item) => (
                  <div
                    key={nihilTool.common.uuid()}
                    className={css.modItem(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

    </div>
  );
}
