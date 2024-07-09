'use client';

import React, { useEffect } from 'react';
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
  const pathname = usePathname();

  useEffect(() => {
    setFormulaString('');
    resetRollResult();
  }, [ pathname, ]);

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
        <div className='flex flex-row gap-1'>
          <div className='flex-1 shrink-0'>
            <input type='radio' name='rollType' />
            <input type='radio' name='rollType' />
          </div>
          <RollButton />
          <ResetButton />
        </div>
      </div>

      <ResultList />
    </>
  );
}
