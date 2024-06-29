'use client';

import React, { useEffect, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Dice, RollResult } from '@nihilapp/dice';
import { nihilTool } from '@nihilapp/tools';

interface Props {
  className?: ClassNameValue;
}

export function HomeContent({ className, }: Props) {
  const css = {
    default: twJoin([
      ``,
      className,
    ]),
  };

  return (
    <>
      <div>content</div>
    </>
  );
}
