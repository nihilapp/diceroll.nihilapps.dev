import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '주사위 굴리기',
  url: '/roll',
});

export default function RollPage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
