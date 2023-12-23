import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';
import { SignUpForm } from '@/src/components/Content';

export const metadata = setMeta({
  title: '회원가입',
  url: '/signup',
});

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
    </>
  );
}
