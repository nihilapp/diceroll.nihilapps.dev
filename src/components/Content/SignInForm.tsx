'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClassNameValue, twJoin } from 'tailwind-merge';

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
      ``,
      styles,
    ]),
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className={css.default}>
        <div>
          <label htmlFor='email'>
            <span>이메일</span>
            <input
              type='email'
              id='email'
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
            <span>{errors.email.message}</span>
          )}
        </div>
        <div>
          <label htmlFor='password'>
            <span>비밀번호</span>
            <input
              type='password'
              id='password'
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
            <span>{errors.password.message}</span>
          )}
        </div>
        <button>로그인</button>
      </form>
    </>
  );
}
