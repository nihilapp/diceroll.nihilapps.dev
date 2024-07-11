'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { resetRollResult, setFormulaString } from '@/src/entities';

interface Props {
  className?: ClassNameValue;
}

export function ResetButton({ className, }: Props) {
  const onClickReset = useCallback(
    () => {
      resetRollResult();
      setFormulaString('');
    },
    []
  );

  const css = {
    default: twJoin([
      `bg-red-500 text-white p-2 rounded-2 hover:bg-red-600`,
      className,
    ]),
  };

  return (
    <>
      <button
        type='button'
        className={css.default}
        onClick={onClickReset}
      >
        초기화
      </button>
    </>
  );
}
