'use client';

import React, { useCallback, useEffect } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import { nihilTool } from '@nihilapp/tools';
import {
  InputFormula, RadioCheckedIcon, RadioEmptyIcon,
  ResetButton, ResultList, RollButton
} from '@/src/components';
import {
  diceStore, resetRollResult, setDiceMessage, setFormulaString, setRollType
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
    setDiceMessage('주사위를 굴린 이력이 없습니다.');
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
    radio(value: string) {
      return twJoin([
        `flex flex-row items-center cursor-pointer hover:text-red-500 rounded-1 p-1`,
        rollType === value && `bg-black-400 text-black-50 hover:text-black-50 !cursor-default`,
      ]);
    },
  };

  return (
    <>
      <div className='flex flex-col gap-1 p-4 white-block mb-5'>
        <InputFormula />
        <div className='flex flex-row gap-1 items-stretch'>
          <div className='flex-1 shrink-0 flex flex-row gap-2 items-center'>
            {radioData.map((radio) => (
              <label
                key={nihilTool.common.uuid()}
                htmlFor={radio.value}
                className={css.radio(radio.value)}
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
                  <RadioCheckedIcon className='text-[140%]' />
                ) : (
                  <RadioEmptyIcon className='text-[140%]' />
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
