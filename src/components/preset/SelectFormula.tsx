'use client';

import React, { useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { SelectItem } from '@/src/components';
import { presetStore } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function SelectFormula({ className, }: Props) {
  const [ isOpen, setIsOpen, ] = useState(false);
  const { formulaString, } = presetStore();

  console.log('formulaString >> ', formulaString);

  const css = {
    selector: twJoin([
      `flex flex-row`,
    ]),
    selectorVision: twJoin([
      ``,
    ]),
    list: twJoin([
      ``,
    ]),
  };

  return (
    <>
      <div className={css.selector}>
        <div className={css.selectorVision}>{formulaString}</div>
        <div className=''>
          {isOpen ? (
            '열림'
          ) : (
            '닫힘'
          )}
        </div>
      </div>

      <div className={css.list}>
        {Dice.preset().map((item) => (
          <SelectItem key={nihilTool.common.uuid()} formula={item} />
        ))}
      </div>
    </>
  );
}
