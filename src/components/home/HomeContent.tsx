'use client';

import React, { useMemo } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';

interface Props {
  className?: ClassNameValue;
}

export function HomeContent({ className, }: Props) {
  const d20 = useMemo(
    () => {
      return Dice.rollToFormula({
        formula: 'd20',
      });
    },
    []
  );

  const d202 = useMemo(
    () => {
      return Dice.rollToFormula({
        formula: 'd20',
      });
    },
    []
  );

  const d203 = useMemo(
    () => {
      return Dice.rollToFormula({
        formula: 'd20',
      });
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
      <div className={css.default}>{nihilTool.common.string(d20)}</div>
      <div className={css.default}>{nihilTool.common.string(d202)}</div>
      <div className={css.default}>{nihilTool.common.string(d203)}</div>
    </>
  );
}
