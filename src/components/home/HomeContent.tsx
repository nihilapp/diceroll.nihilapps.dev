'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice, RollResult } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';

interface Props {
  className?: ClassNameValue;
}

export function HomeContent({ className, }: Props) {
  const [ d201, setD201, ] = useState<RollResult[]>(null);
  const [ d202, setD202, ] = useState<RollResult[]>(null);
  const [ d203, setD203, ] = useState<RollResult[]>(null);

  useEffect(() => {
    setD201(Dice.rollToFormula({
      formula: 'd20',
    }));

    setD202(Dice.rollToFormula({
      formula: 'd20',
    }));

    setD203(Dice.rollToFormula({
      formula: 'd20',
    }));
  }, []);

  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <div className={css.default}>{nihilTool.common.string(d201)}</div>
      <div className={css.default}>{nihilTool.common.string(d202)}</div>
      <div className={css.default}>{nihilTool.common.string(d203)}</div>
    </>
  );
}
