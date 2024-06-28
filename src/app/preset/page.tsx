import React from 'react';
import { setMeta } from '@/src/utils';

interface Props {
  //
}

export const metadata = setMeta({
  title: '기본 주사위',
  url: '/preset',
});

export default function page() {
  return (
    <>
      <div>content</div>
    </>
  );
}
