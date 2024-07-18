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
          <div className='flex flex-row gap-3 items-center justify-center mb-2'>
            <small>DiceRoll {configData.version}</small>
            <small>
              <a
                href='https://github.com/NIHILncunia'
                target='_blank'
                rel='noopener noreferrer'
                className='dark:!bg-black-50 bg-black-base dark:!text-black-base text-white p-1 px-2 rounded-1 inline-block text-[90%] font-900 hover:!bg-red-500 dark:hover:!bg-red-500 dark:hover:!text-black-50'
              >
                깃허브
              </a>
            </small>
          </div>

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
