'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AuthIcon } from '@/src/components/Content/AuthIcon';
import { supabase } from '@/src/utils/supabase/client';

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
  const router = useRouter();

  const onSubmitForm: SubmitHandler<Inputs> = useCallback(
    (data) => {
      supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      }).then((response) => {
        if (response.error) {
          toast.error('로그인 실패. 이메일이나 비밀번호를 확인해주세요.');
        }
      });
    },
    []
  );

  const goToSignUp = useCallback(
    () => {
      router.push('/signup');
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
      `font-900 text-middle`,
    ]),
    input: twJoin([
      `p-3 bg-black-100 rounded-1 border-b-2 border-black-100 outline-none`,
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
              className={twJoin(css.input, errors.email && `border-red-500`)}
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
              className={twJoin(css.input, errors.password && `border-red-500`)}
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
        <div className='divide-x divide-black-100 text-right font-500'>
          <Link href='/signin/find' className='pr-2 text-blue-500 hover:underline hover:text-blue-600'>이메일 찾기</Link>
          <Link href='/signin/password-reset' className='pl-2 text-blue-500 hover:underline hover:text-blue-600'>비밀번호
            재설정
          </Link>
        </div>
        <button className={css.button}>로그인</button>
        <button type='button' className='p-3 text-middle border border-black-base text-black-base rounded-1 font-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-200' onClick={goToSignUp}>회원가입</button>
      </form>

      <AuthIcon />
    </>
  );
}
