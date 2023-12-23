'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { SubmitHandler, useForm } from 'react-hook-form';

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
    formState: { errors, },
  } = useForm<Inputs>({
    mode: 'all',
  });

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
            <input type='text' id='email' {...register('email')} />
          </label>
          {errors.email && (
            <span>{errors.email.message}</span>
          )}
        </div>
      </form>
    </>
  );
}
