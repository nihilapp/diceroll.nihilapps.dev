'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { commonStore } from '@/src/store/common.store';
import { Nihil } from '@/src/utils/nihil';

interface Props {
  styles?: ClassNameValue;
}

export function RollResultLog({ styles, }: Props) {
  const { diceResult, } = commonStore();

  console.log(diceResult);

  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        {diceResult.map((item) => (
          <div key={Nihil.uuid(0)}>{Nihil.string(item)}</div>
        ))}
      </div>
    </>
  );
}
