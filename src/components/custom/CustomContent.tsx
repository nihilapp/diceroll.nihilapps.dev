'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import {
  InputFormula,
  ResetButton, ResultList, RollButton
} from '@/src/components';
import { resetRollResult, setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function CustomContent({ className, }: Props) {
  const [ rollType, setRollType, ] = useState('default');
  const pathname = usePathname();

  useEffect(() => {
    setFormulaString('');
    resetRollResult();
  }, [ pathname, ]);

  const onChangeRadio = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target);
      setRollType(event.target.id);
    },
    []
  );

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <div className='flex flex-col gap-1'>
        <InputFormula />
        <div className='flex flex-row gap-1 items-stretch'>
          <div className='flex-1 shrink-0 flex flex-row gap-2 items-center'>
            <label htmlFor='default'>
              <input
                type='radio'
                checked={rollType === 'default'}
                id='default'
                name='rollType'
                value={rollType}
                onChange={onChangeRadio}
                className='mr-1'
              />
              기본
            </label>
            <label htmlFor='min'>
              <input
                type='radio'
                id='min'
                checked={rollType === 'min'}
                name='rollType'
                value={rollType}
                onChange={onChangeRadio}
                className='mr-1'
              />
              최소굴림
            </label>
            <label htmlFor='max'>
              <input
                type='radio'
                id='max'
                checked={rollType === 'max'}
                name='rollType'
                value={rollType}
                onChange={onChangeRadio}
                className='mr-1'
              />
              최대굴림
            </label>
          </div>
          <RollButton />
          <ResetButton />
        </div>
      </div>

      <ResultList />
    </>
  );
}
