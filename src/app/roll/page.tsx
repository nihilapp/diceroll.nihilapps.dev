import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

interface Props {
  //
}

export const metadata = setMeta({
  title: '주사위 굴리기',
  url: '/roll',
});

export default function page() {
  return (
    <>
      <div>content</div>
    </>
  );
}
