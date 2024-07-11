'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import { nihilTool } from '@nihilapp/tools';
import { Icon } from '@iconify/react';
import {
  InputFormula,
  ResetButton, ResultList, RollButton
} from '@/src/components';
import {
  diceStore, resetRollResult, setFormulaString, setRollType
} from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

const radioData = [
  { value: 'default', label: '일반굴림', },
  { value: 'min', label: '최소굴림', },
  { value: 'max', label: '최대굴림', },
];

export function CustomContent({ className, }: Props) {
  const { rollType, } = diceStore();
  const pathname = usePathname();

  useEffect(() => {
    setFormulaString('');
    resetRollResult();
    setRollType('default');
  }, [ pathname, ]);

  const onChangeRadio = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRollType(event.target.id as ('default' | 'min' | 'max'));
    },
    []
  );

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
    radio: twJoin([
      `flex flex-row gap-1 items-center`,
    ]),
  };

  return (
    <>
      <div className='flex flex-col gap-1'>
        <InputFormula />
        <div className='flex flex-row gap-1 items-stretch'>
          <div className='flex-1 shrink-0 flex flex-row gap-2 items-center'>
            {radioData.map((radio) => (
              <label
                key={nihilTool.common.uuid()}
                htmlFor={radio.value}
                className={css.radio}
              >
                <input
                  type='radio'
                  checked={rollType === radio.value}
                  id={radio.value}
                  name='rollType'
                  value={rollType}
                  onChange={onChangeRadio}
                  className='mr-1 hidden'
                />
                {rollType === radio.value ? (
                  <Icon icon='mdi:radio-button-checked' fontSize='120%' />
                ) : (
                  <Icon icon='mdi:radio-button-unchecked' fontSize='120%' />
                )}
                <span>{radio.label}</span>
              </label>
            ))}
          </div>
          <RollButton />
          <ResetButton />
        </div>
      </div>

      <ResultList />
    </>
  );
}
