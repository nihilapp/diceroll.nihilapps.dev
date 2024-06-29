import React from 'react';
import { setMeta } from '@/src/utils';
import { PresetContent } from '@/src/components';

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
      <PresetContent />
    </>
  );
}
