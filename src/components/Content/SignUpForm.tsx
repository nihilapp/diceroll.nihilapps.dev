'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthIcon } from '@/src/components/Content/AuthIcon';
import { supabase } from '@/src/utils/supabase/client';

interface Props {
  styles?: ClassNameValue;
}

interface Inputs {
  email: string;
  userName: string;
  password: string;
  passwordCheck: string;
  isAgree: boolean;
}

export function SignUpForm({ styles, }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const onSubmitForm: SubmitHandler<Inputs> = useCallback(
    async (data) => {
      await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      }).then((response) => {
        console.log(response);
      });
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
          <label htmlFor='user-name' className={css.inputBlock}>
            <span className={css.label}>닉네임</span>
            <input
              type='text'
              id='user-name'
              className={twJoin(css.input, errors.password && `border-red-500`)}
              {...register('userName', {
                required: {
                  value: true,
                  message: '닉네임을 입력하세요.',
                },
                minLength: {
                  value: 2,
                  message: '닉네임은 2자 이상이어야 합니다.',
                },
              })}
            />
          </label>
          {errors.userName && (
            <span className={css.errorMessage}>{errors.userName.message}</span>
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
        <div className={css.inputGroup}>
          <label htmlFor='password-check' className={css.inputBlock}>
            <span className={css.label}>비밀번호 확인</span>
            <input
              type='password'
              id='password-check'
              className={twJoin(css.input, errors.passwordCheck && `border-red-500`)}
              autoComplete='off'
              {...register('passwordCheck', {
                required: {
                  value: true,
                  message: '비밀번호를 재입력하세요.',
                },
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상이어야 합니다.',
                },
                validate: {
                  passwordCheck() {
                    return (watch('password') === watch('passwordCheck')) || '비밀번호가 일치하지 않습니다.';
                  },
                },
              })}
            />
          </label>
          {errors.passwordCheck && (
            <span className={css.errorMessage}>{errors.passwordCheck.message}</span>
          )}
        </div>
        <button className={css.button}>회원가입</button>
      </form>

      <AuthIcon />
    </>
  );
}
