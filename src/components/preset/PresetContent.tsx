'use client';

import React, { useEffect } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import {
  ResetButton, ResultList, RollButton, SelectFormula
} from '@/src/components';
import { resetRollResult, setDiceMessage, setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function PresetContent({ className, }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    setFormulaString('D2');
    resetRollResult();
    setDiceMessage('주사위를 굴린 이력이 없습니다.');
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
      <div className='white-block p-4 flex flex-row gap-1 mb-5'>
        <SelectFormula />
        <RollButton />
        <ResetButton />
      </div>

      <ResultList />
    </>
  );
}
