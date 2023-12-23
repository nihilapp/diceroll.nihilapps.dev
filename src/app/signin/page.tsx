import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';
import { SignInForm } from '@/src/components/Content';

export const metadata = setMeta({
  title: '로그인',
  url: '/signin',
});

export default function SignInPage() {
  return (
    <>
      <SignInForm />
    </>
  );
}
