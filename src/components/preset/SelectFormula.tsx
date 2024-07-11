'use client';

import React, { useCallback, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import { SelectItem } from '@/src/components';
import { diceStore } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function SelectFormula({ className, }: Props) {
  const [ isOpen, setIsOpen, ] = useState(false);
  const { formulaString, } = diceStore();

  const onClickOpen = useCallback(
    () => {
      setIsOpen((prev) => !prev);
    },
    []
  );

  const css = {
    selector: twJoin([
      `bg-black-500 text-black-50 relative flex flex-row items-stretch border-2 border-black-500 dark:border-black-400 rounded-2 p-1 select-none z-20 cursor-pointer`,
      `dark:text-black-50 dark:bg-black-500`,
    ]),
    selectorVision: twJoin([
      `p-1 flex-1 shrink-0 text-center`,
    ]),
    button: twJoin([
      `p-1 bg-black-600 hover:bg-black-700 flex items-center justify-center text-[140%] rounded-2`,
    ]),
    list: twJoin([
      `flex flex-col gap-1 overflow-y-scroll transition-[height,top] duration-200 mt-2 p-1 border-2 border-black-400 rounded-2 absolute bg-white w-full z-10 dark:bg-black-500`,
      isOpen && `h-[178px] top-full`,
      !isOpen && `h-0 top-0`,
    ]),
  };

  return (
    <div className='relative flex-1 shrink-0'>
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
          <SelectItem
            key={nihilTool.common.uuid()}
            formula={item}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
}
