'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClassNameValue, twJoin, twMerge } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

interface Inputs {
  email: string;
  password: string;
}

export function SignInForm({ styles, }: Props) {
  const { register, handleSubmit, } = useForm<Inputs>({ mode: 'all', });

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
        <label htmlFor='email'>
          <span>이메일</span>
          <input type='text' id='email' {...register('email')} />
        </label>
        <label htmlFor='password'>
          <span>비밀번호</span>
          <input type='password' id='password' autoComplete='off' {...register('password')} />
        </label>
      </form>
    </>
  );
}
