'use client';

import React from 'react';
import { twJoin } from 'tailwind-merge';
import { nihilTool } from '@nihilapp/tools';
import { diceStore } from '@/src/entities';
import { ResultListItem } from '@/src/components';

export function ResultList() {
  const { rollResults, diceMessage, } = diceStore();

  const css = {
    default: twJoin([
      `text-black-base dark:text-white text-middle flex flex-col gap-5 white-block p-4`,
    ]),
    noneItems: twJoin([
      `text-black-base dark:text-black-50 text-middle white-block p-4`,
    ]),
  };

  return (
    <>
      {(rollResults.length === 0) && (
        <div className={css.noneItems}>
          <div className='font-900 text-center text-[140%]'>
            {diceMessage}
          </div>
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
