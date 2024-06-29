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
      `select-none rounded-1 flex flex-row gap-1 items-center justify-center p-1 border-2 border-black-500 text-white bg-black-500 hover:border-red-500 hover:bg-red-500 dark:bg-black-500 dark:border-black-500 dark:hover:bg-red-500 dark:hover:border-red-500`,
      link === pathname && `text-red-500 border-red-500 bg-white hover:text-red-500 hover:border-red-500 hover:bg-white dark:text-red-500 dark:border-red-500 dark:bg-white dark:hover:text-red-500 dark:hover:border-red-500 dark:hover:bg-white cursor-default`,
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
