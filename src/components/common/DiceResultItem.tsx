'use client';

import React, { useMemo } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { DiceItem, DiceResult } from '@nihilapp/dice';

interface Props {
  dice: DiceResult;
}

export function DiceResultItem({ dice, }: Props) {
  const {
    formula, total, result, ignore,
  } = dice;

  const css = {
    formulaBox: twJoin([
      `flex flex-row gap-2 shrink-0`,
    ]),
    formula: twJoin([
      `flex flex-row gap-1 items-center font-900 text-[110%] rounded-1 border-2 border-black-400 bg-black-500 px-2 text-black-50 py-0`,
    ]),
    total: twJoin([
      `inline-block px-3 py-0 bg-black-600 text-[110%] font-900 text-white rounded-1 border-2 border-black-400`,
    ]),
    details: twJoin([
      `text-[110%]`,
    ]),
    dice(item: DiceItem) {
      return twJoin([
        `inline-block px-3 rounded-1 text-white bg-black-400 border-2 border-black-400 min-w-0`,
        item.isFumble && `!bg-red-500 !text-white !border-red-500`,
        item.isCritical && `!bg-green-600 !text-white !border-green-600`,
      ]);
    },
  };

  return (
    <>
      <div className={css.formulaBox}>
        <div>
          <div className={css.formula}>
            <Icon icon='iconoir:hexagon-dice' />
            <span>{formula}</span>
          </div>
        </div>
        <div className='shrink-0 inline-flex flex-col gap-1'>
          <div>
            <div className={css.total}>{total}</div>
          </div>
          <div className={css.details}>
            {result.map((item) => (
              <div key={nihilTool.common.uuid()} className={css.dice(item)}>
                {item.dice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
