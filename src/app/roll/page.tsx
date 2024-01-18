import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';
import { RollConfig, RollResultLog } from '@/src/components/Content';

export const metadata = setMeta({
  title: '주사위 굴리기',
  url: '/roll',
});

export default function RollPage() {
  return (
    <div className='py-[50px] w-full px-2 mf-sm:w-full mf-md:w-full mf-lg:max-w-[1000px] mx-auto'>
      <RollConfig />
      <RollResultLog />
    </div>
  );
}
