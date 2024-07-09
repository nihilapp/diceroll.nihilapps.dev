'use client';

import React, { useEffect } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import {
  ResetButton, ResultList, RollButton, SelectFormula
} from '@/src/components';
import { resetRollResult, setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function PresetContent({ className, }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    setFormulaString('D2');
    resetRollResult();
  }, [ pathname, ]);

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
    button: twJoin([
      ``,
    ]),
  };

  return (
    <>
      <div className='flex flex-row gap-1'>
        <SelectFormula />
        <RollButton />
        <ResetButton />
      </div>

      <ResultList />
    </>
  );
}
