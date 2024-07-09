import React from 'react';
import { setMeta } from '@/src/utils';
import { CustomContent } from '@/src/components';

interface Props {
  //
}

export const metadata = setMeta({
  title: '커스텀 주사위',
  url: '/custom',
});

export default function page() {
  return (
    <>
      <CustomContent />
    </>
  );
}
