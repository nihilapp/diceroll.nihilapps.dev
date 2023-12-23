import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '내 정보',
  url: '/mypage',
});

export default function MyPage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
