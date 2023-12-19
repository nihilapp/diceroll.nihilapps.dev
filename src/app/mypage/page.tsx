import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

interface Props {
  //
}

export const metadata = setMeta({
  title: '내 정보',
  url: '/mypage',
});

export default function page() {
  return (
    <>
      <div>content</div>
    </>
  );
}
