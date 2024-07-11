'use client';

import React from 'react';
import { twJoin } from 'tailwind-merge';
import { nihilTool } from '@nihilapp/tools';
import { Dice } from '@nihilapp/dice';
import { diceStore } from '@/src/entities';
import { ResultListItem } from '@/src/components';

export function ResultList() {
  const { rollResults, } = diceStore();

  const css = {
    default: twJoin([
      `mt-10 pt-10 border-t-[10px] border-dotted border-black-200 text-black-base dark:text-white text-middle flex flex-col gap-5`,
    ]),
    noneItems: twJoin([
      `mt-10 pt-10 border-t-[10px] border-dotted border-black-200 text-black-base dark:text-black-50 text-middle`,
    ]),
  };

  return (
    <>
      {(rollResults.length === 0) && (
        <div className={css.noneItems}>
          <div className='mb-20 font-900 text-center text-[200%]'>주사위를 굴린 이력이 없습니다.</div>
        </div>
      )}

      {(rollResults.length > 0) && (
        <div className={css.default}>
          {rollResults.map((item) => (
            <ResultListItem
              key={nihilTool.common.uuid()}
              resultItem={item}
            />
          ))}
        </div>
      )}
    </>
  );
}
