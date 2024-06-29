'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Formula, P } from '@/src/components';

interface Props {
  className?: ClassNameValue;
}

export function HomeContent({ className, }: Props) {
  const css = {
    default: twJoin([
      `bg-white rounded-2 shadow-md p-2`,
      className,
    ]),
    heading2: twJoin([
      `mb-4 text-[120%] font-900 p-2 border-l-[15px] border-red-500 bg-black-base text-white dark:bg-white dark:text-black-base rounded-r-2`,
    ]),
    dt: twJoin([
      `bg-black-500 text-white p-1 rounded-t-2 text-center dark:bg-black-400`,
    ]),
    dd: twJoin([
      `mb-4 nth-last-1:mb-0 p-1 text-justify rounded-b-2 border-2 border-t-0 border-black-500 dark:border-black-400`,
    ]),
  };

  return (
    <>
      <h2 className={css.heading2}>DiceRoll 소개</h2>

      <P>DiceRoll은 TRPG를 하다가 만들게 된 웹 프로그램입니다. 주사위를 간편하게 굴릴 수 있습니다. 미리 준비된 주사위를 굴릴 수도 있고 커스텀 주사위를 굴릴 수도 있습니다. TRPG 뿐만 아니라 다양한 용도로 사용할 수도 있습니다. 좌측 메뉴에서 기본 주사위, 커스텀 주사위를 클릭해서 해당 페이지로 넘어갈 수 있습니다.</P>

      <h2 className={css.heading2}>사용법</h2>

      <div>
        <P>DiceRoll에서는 주사위를 굴리는 식을 주사위식이라고 부릅니다. 주사위식은 아래와 같이 표현 가능합니다. 상술했듯이 DiceRoll은 기본 주사위와 커스텀 주사위를 굴릴 수 있습니다.</P>

        <P>주사위식은 조합이 가능합니다. 아래의 방법들을 조합해 원하는 주사위를 굴리세요. 단, 다른 주사위식들과 <Formula>*n</Formula>은 함께 사용될 수 없으니 <Formula>nDn nDn</Formula>처럼 공백으로 나눠서 사용해주세요.</P>

        <dl>
          <dt className={css.dt}>nDn</dt>
          <dd className={css.dd}>첫번째 <Formula>n</Formula>은 주사위의 개수를 말합니다. 두번째 <Formula>n</Formula>은 주사위의 면을 말합니다. <Formula>3D6</Formula>은 6면체 주사위 3개를 의미합니다. 이렇게 굴리면 한 번에 굴리고 모두 더한 값을 보여줍니다. 첫번째 <Formula>n</Formula>은 생략해도 됩니다. 그럼 1Dn과 같은 의미가 됩니다.
          </dd>
          <dt className={css.dt}>nDn+nDn</dt>
          <dd className={css.dd}>주사위식은 더하기 기호를 통해 값을 더할 수 있습니다. 각 주사위의 결과는 세세하게 보여주고, 모두 더한 값도 보여줍니다.
          </dd>
          <dt className={css.dt}>nDn+n</dt>
          <dd className={css.dd}>주사위식과 양의 정수와 음의 정수를 더할 수 있습니다. 이를 보정치라고 부릅니다. 주사위를 굴린 결과에는 보정치들도 함께 나열됩니다.</dd>
          <dt className={css.dt}>nDn*n</dt>
          <dd className={css.dd}>주사위식에 별표 기호와 함께 숫자를 입력해주면 같은 주사위식을 따로 명시한 만큼 실행합니다. <Formula>2D20*2</Formula> 라면 <Formula>2D20</Formula>을 두번 굴립니다. 총합을 계산하지 않습니다.</dd>
          <dt className={css.dt}>nDn nDn</dt>
          <dd className={css.dd}>주사위식 사이에 공백을 넣으면 역시 따로 굴리겠다는 것을 의미합니다. 총합으로 계산하지 않습니다.</dd>
          <dt className={css.dt}>nDnkhn</dt>
          <dd className={css.dd}><Formula>nDn</Formula>만큼의 주사위를 굴리고 <strong>kh</strong> 다음의 <Formula>n</Formula>개 만큼 가장 높은 순으로 주사위를 선택합니다.</dd>
          <dt className={css.dt}>nDnkln</dt>
          <dd className={css.dd}><Formula>nDn</Formula>만큼의 주사위를 굴리고 <strong>kl</strong> 다음의 <Formula>n</Formula>개 만큼 가장 낮은 순으로 주사위를 선택합니다.</dd>
        </dl>
      </div>
    </>
  );
}
