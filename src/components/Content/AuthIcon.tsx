'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Image from 'next/image';
import googleIcon from '@/src/images/icon/google-icon.png';
import githubIcon from '@/src/images/icon/github-icon.png';

interface Props {
  styles?: ClassNameValue;
}

export function AuthIcon({ styles, }: Props) {
  const onClickGoogleSignIn = useCallback(
    () => {
      console.log('구글로 로그인');
    },
    []
  );

  const onClickGithubSignIn = useCallback(
    () => {
      console.log('깃허브로 로그인');
    },
    []
  );

  const css = {
    default: twJoin([
      `flex flex-row items-center justify-center gap-2`,
      styles,
    ]),
    button: twJoin([
      `p-2 rounded-1 border border-black-200 hover:border-blue-500 transition-colors duration-200`,
    ]),
    image: twJoin([
      `w-[40px] h-[40px]`,
    ]),
  };

  return (
    <>
      <div className='border-t border-black-400 w-full mf-sm:w-full mf-md:w-full mf-md:max-w-[600px] mf-lg:w-[600px] mx-auto text-center py-5'>
        <p className='font-500 text-black-base text-middle'>소셜계정으로 로그인하세요.</p>
      </div>
      <div className={css.default}>
        <button onClick={onClickGoogleSignIn} className={twJoin(css.button, `bg-[#f2f7f8]`)}>
          <span className='a11y-hidden'>구글로 로그인</span>
          <Image
            src={googleIcon.src}
            width={googleIcon.width}
            height={googleIcon.height}
            alt='구글 로그인 버튼'
            priority
            className={css.image}
          />
        </button>
        <button onClick={onClickGithubSignIn} className={twJoin(css.button, `bg-white`)}>
          <span className='a11y-hidden'>깃허브로 로그인</span>
          <Image
            src={githubIcon.src}
            alt='깃허브 로그인 버튼'
            width={githubIcon.width}
            height={githubIcon.height}
            priority
            className={css.image}
          />
        </button>
      </div>
    </>
  );
}
