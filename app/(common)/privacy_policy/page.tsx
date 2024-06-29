import React from 'react';
import { setMeta } from '@/src/utils';

interface Props {
  //
}

export const metadata = setMeta({
  title: '개인정보처리방침',
  url: '/privacy_policy',
});

export default function page() {
  return (
    <>
      <div>DiceRoll은 그 어떤 개인정보도 요구하지 않습니다. 주사위를 굴리는데에 개인정보는 필요 없으니까요.</div>
      <div>DiceRoll doesn&apos;t require any personal information because rolling dice doesn&apos;t need it.</div>
    </>
  );
}
