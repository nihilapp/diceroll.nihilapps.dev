'use client';

import React, { useCallback, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { SelectItem } from '@/src/components';
import { presetStore } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function SelectFormula({ className, }: Props) {
  const [ isOpen, setIsOpen, ] = useState(false);
  const { formulaString, } = presetStore();

  console.log('formulaString >> ', formulaString);

  const onClickOpen = useCallback(
    () => {
      setIsOpen((prev) => !prev);
    },
    []
  );

  const css = {
    selector: twJoin([
      `flex flex-row items-stretch border-2 border-black-400 rounded-2 p-1 select-none`,
    ]),
    selectorVision: twJoin([
      `p-1 flex-1 shrink-0 text-center bg-red-500`,
    ]),
    button: twJoin([
      `p-1 bg-black-200 flex items-center justify-center text-[140%]`,
    ]),
    list: twJoin([
      ``,
    ]),
  };

  return (
    <>
      <div className={css.selector} onClick={onClickOpen}>
        <div className={css.selectorVision}>{formulaString}</div>
        <div className={css.button}>
          {isOpen ? (
            <Icon icon='raphael:arrowdown' />
          ) : (
            <Icon icon='raphael:arrowup' />
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
