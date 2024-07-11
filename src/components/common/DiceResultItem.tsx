'use client';

import React from 'react';
import { twJoin } from 'tailwind-merge';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { DiceItem, DiceResult } from '@nihilapp/dice';

interface Props {
  dice: DiceResult;
  mod: number[];
}

export function DiceResultItem({ dice, mod, }: Props) {
  const {
    formula, total, result, ignore,
  } = dice;

  const css = {
    diceBox: twJoin([
      `bg-black-600 text-black-50 rounded-2 p-4`,
    ]),
    formulaBox: twJoin([
      `flex flex-row items-center gap-2 mb-4`,
    ]),
    formula: twJoin([
      `flex flex-row gap-1 items-center text-[120%] font-900`,
    ]),
    total: twJoin([
      `flex flex-row gap-2 items-center text-[120%] font-900`,
    ]),
    details: twJoin([
      `bg-white rounded-2 text-black-base p-2 pb-1`,
    ]),
    ignore: twJoin([
      `bg-black-300 rounded-2 text-black-base p-2 pb-1`,
    ]),
    mod: twJoin([
      `bg-white rounded-2 text-black-base p-2 pb-1`,
    ]),
    dice(item: DiceItem) {
      return twJoin([
        `inline-block px-3 rounded-1 text-white bg-black-400 border-2 border-black-400 mb-1 mr-1`,
        item.isFumble && `!bg-red-500 !text-white !border-red-500`,
        item.isCritical && `!bg-green-600 !text-white !border-green-600`,
      ]);
    },
    modItem(item: number) {
      return twJoin([
        `inline-block px-3 rounded-1 text-white border-2 mb-1 mr-1`,
        item > 0 && `bg-green-600 border-green-600`,
        item < 0 && `bg-red-500 border-red-500`,
      ]);
    },
  };

  return (
    <>
      <div className={css.diceBox}>
        <div className={css.formulaBox}>
          <div className={css.formula}>
            <Icon icon='iconoir:hexagon-dice' className='mt-[2px]' />
            <span>{formula}</span>
          </div>
          <div className={css.total}>
            <Icon icon='fa:arrow-right' className='mt-[2px]' />
            <span>{total}</span>
          </div>
        </div>
        <div className={css.details}>
          {result.map((diceItem) => (
            <span
              key={nihilTool.common.uuid()}
              className={css.dice(diceItem)}
            >
              {diceItem.dice}
            </span>
          ))}
        </div>
        {ignore.length !== 0 && (
          <>
            <div className='mt-4 mb-1'>버려짐</div>
            <div className={css.ignore}>
              {ignore.map((ignore) => (
                <div
                  key={nihilTool.common.uuid()}
                  className={css.dice(ignore)}
                >
                  {ignore.dice}
                </div>
              ))}
            </div>
          </>
        )}
        {mod.length !== 0 && (
          <>
            <div className='mt-4 mb-1'>보정</div>
            <div className={css.mod}>
              {mod.map((item) => (
                <div
                  key={nihilTool.common.uuid()}
                  className={css.modItem(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
