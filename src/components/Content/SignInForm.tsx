'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';

interface Props {
  styles?: ClassNameValue;
}

interface Inputs {
  email: string;
  password: string;
}

export function SignInForm({ styles, }: Props) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<Inputs>({ mode: 'all', });

  const onSubmitForm: SubmitHandler<Inputs> = useCallback(
    (data) => {
      console.log(data);
    },
    []
  );

  const css = {
    default: twJoin([
      `w-full mf-sm:w-full mf-md:w-full mf-md:max-w-[600px] mf-lg:w-[600px] mx-auto py-[50px] flex flex-col gap-3`,
      styles,
    ]),
    inputGroup: twJoin([
      `flex flex-col gap-1`,
    ]),
    inputBlock: twJoin([
      `flex flex-col gap-1`,
    ]),
    label: twJoin([
      `font-500 text-middle`,
    ]),
    input: twJoin([
      `p-3 bg-black-100 rounded-1`,
    ]),
    errorMessage: twJoin([
      `text-red-500 italic font-900 text-middle`,
    ]),
    button: twJoin([
      `p-3 text-middle font-500 rounded-1 bg-black-600 text-white hover:bg-black-base transition-colors duration-200 mt-10`,
    ]),
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className={css.default}>
        <div className={css.inputGroup}>
          <label htmlFor='email' className={css.inputBlock}>
            <span className={css.label}>이메일</span>
            <input
              type='email'
              id='email'
              className={css.input}
              {...register('email', {
                required: {
                  value: true,
                  message: '이메일을 입력하세요.',
                },
                pattern: {
                  value: /(\w+)@(\w+.\w+)/g,
                  message: '이메일 형식이 아닙니다.',
                },
              })}
            />
          </label>
          {errors.email && (
            <span className={css.errorMessage}>{errors.email.message}</span>
          )}
        </div>
        <div className={css.inputGroup}>
          <label htmlFor='password' className={css.inputBlock}>
            <span className={css.label}>비밀번호</span>
            <input
              type='password'
              id='password'
              className={css.input}
              autoComplete='off'
              {...register('password', {
                required: {
                  value: true,
                  message: '비밀번호를 입력하세요.',
                },
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상이어야 합니다.',
                },
              })}
            />
          </label>
          {errors.password && (
            <span className={css.errorMessage}>{errors.password.message}</span>
          )}
        </div>
        <div className='divide-x divide-black-100 text-right font-500 text-black-base'>
          <Link href='/signin/find' className='pr-2'>이메일 찾기</Link>
          <Link href='/signin/password-reset' className='pl-2'>비밀번호 재설정</Link>
        </div>
        <button className={css.button}>로그인</button>
      </form>

      <div>
        <button>구글로 로그인</button>
        <button>깃허브로 로그인</button>
      </div>
    </>
  );
}
