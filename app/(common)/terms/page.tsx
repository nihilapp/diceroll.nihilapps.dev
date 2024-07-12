import React from 'react';
import { setMeta } from '@/src/utils';
import { Heading2, P } from '@/src/components';

interface Props {
  //
}

export const metadata = setMeta({
  title: '이용약관',
  url: '/terms',
});

export default function page() {
  return (
    <>
      <Heading2>이용약관</Heading2>
      <P>DiceRoll은 그 어떤 보드게임을 하더라도 사용할 수 있습니다. 단, 주사위로 인한 결과는 DiceRoll에서 책임지지 않습니다.</P>
      <P isLast>DiceRoll can be used with any board game. However, it does not take responsibility for outcomes resulting from dice rolls.</P>
    </>
  );
}
