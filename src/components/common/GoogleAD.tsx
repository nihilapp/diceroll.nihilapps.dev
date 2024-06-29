'use client';

import React, { useEffect, useRef } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
  isSide?: boolean;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAD({ className, isSide, }: Props) {
  useEffect(() => {
    const pushAD = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    };

    let interval = setInterval(() => {
      if (window.adsbygoogle) {
        pushAD();
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const css = {
    default: twJoin([
      ``,
      isSide && `!mt-5`,
      !isSide && `!mb-4 !h-[150px]`,
      className,
    ]),
    isSide: twJoin([
      `adsbygoogle inline-block w-[300px] h-[320px]`,
    ]),
    top: twJoin([
      `adsbygoogle block w-full h-[150px]`,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <ins
          className={isSide ? css.isSide : css.top}
          data-ad-client='ca-pub-9256396675875954'
          data-ad-slot={isSide ? '7396456205' : '1486272521'}
        />
      </div>
    </>
  );
}
