import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { configData } from '@/src/data';

interface Props {
  className?: ClassNameValue;
}

export function Footer({ className, }: Props) {
  const nowYear = new Date().getFullYear();
  const startYear = 2021;

  const year = startYear < nowYear ? `${startYear}-${nowYear}` : nowYear;

  const css = {
    default: twJoin([
      `p-2 text-center mt-2 text-black-base`,
      className,
    ]),
  };

  return (
    <>
      <footer className={css.default}>
        <div className='white-block flex flex-col gap-1'>
          <small className='mb-2'>DiceRoll {configData.version}</small>

          <small className='flex flex-row gap-3 justify-center'>
            <Link href='/terms' className='underline hover:text-red-500'>이용약관</Link>
            <Link href='/privacy_policy' className='underline hover:text-red-500'>개인정보 처리방침</Link>
          </small>

          <small className='inline-flex flex-row items-center justify-center'>
            <Icon icon='charm:copyright' />
            <span className='-mt-[2px] ml-[2px]'>{year}. NIHILncunia.</span>
          </small>
        </div>
      </footer>
    </>
  );
}
