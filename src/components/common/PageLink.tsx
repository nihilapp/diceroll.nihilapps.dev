'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';

interface Props {
  className?: ClassNameValue;
  link: string;
  icon: string;
  children: React.ReactNode;
}

export function PageLink({
  className, link, icon, children,
}: Props) {
  const pathname = usePathname();

  const css = {
    default: twJoin([
      `select-none rounded-1 flex flex-row gap-1 items-center justify-center p-1 border-2 border-black-500 text-white bg-black-500`,
      link === pathname && `!text-white border-red-400 bg-red-400 hover:text-white !hover:border-red-400 !hover:bg-red-400 dark:text-white dark:border-red-400 dark:bg-red-400 dark:hover:text-white dark:hover:border-red-400 dark:hover:bg-red-400 cursor-default`,
      link !== pathname && `hover:border-red-600 hover:bg-red-600 dark:bg-black-500 dark:border-black-500 dark:hover:bg-red-500 dark:hover:border-red-500`,
      className,
    ]),
  };

  return (
    <>
      <Link href={link} className={css.default}>
        {icon && (
          <Icon icon={icon} />
        )}

        <span>{children}</span>
      </Link>
    </>
  );
}
