import React from 'react';
import { setMeta } from '@/src/utils';

interface Props {
  //
}

export const metadata = setMeta({
  title: '기본주사위',
  url: '/preset',
});

export default function PresetDicePage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
