'use client';

import React, {
  ChangeEvent, KeyboardEvent,
  useCallback, useState
} from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import { preset, rollAllDices } from '@nihilncunia/diceroll';
import { Nihil } from '@/src/utils/nihil';
import { addDiceResult, commonStore, diceResultClear } from '@/src/store/common.store';

interface Props {
  styles?: ClassNameValue;
}

interface Inputs {
  dice: string;
}

export function RollConfig({ styles, }: Props) {
  const [ type, setType, ] = useState('custom');
  const [ dice, setDice, ] = useState('none');
  const [ myDice, setMyDice, ] = useState('none');
  const [ rollType, setRollType, ] = useState('default');

  const { register, watch, } = useForm<Inputs>();

  const { diceResult, } = commonStore();

  const onChangeType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setType(event.target.value);
    },
    []
  );

  const onChangePreset = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setDice(event.target.value);
    },
    []
  );

  const onChangeRollType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setRollType(event.target.value);
    },
    []
  );

  const onChangeMyDice = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setMyDice(event.target.value);
    },
    []
  );

  const onClickReset = useCallback(
    () => {
      diceResultClear();
    },
    []
  );

  const onClickRoll = useCallback(
    () => {
      if (type === 'custom') {
        const result = rollAllDices(watch('dice', rollType));

        addDiceResult(result);
      } else if (type === 'preset') {
        if (dice === 'none') {
          return;
        }

        const result = rollAllDices(dice, rollType);

        addDiceResult(result);
      } else {
        if (myDice === 'none') {
          return;
        }

        const result = rollAllDices(myDice, rollType);

        addDiceResult(result);
      }
    },
    [ dice, type, myDice, rollType, ]
  );

  const onKeydownRoll = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter' || event.key === 'Enter') {
        onClickRoll();
      }
    },
    []
  );

  const css = {
    default: twJoin([
      `text-middle`,
      styles,
    ]),
    select: twJoin([
      `p-3 bg-black-600 rounded-1 text-white flex-1 shrink-0 text-middle`,
    ]),
    button: twJoin([
      `p-2 flex flex-row gap-1 items-center justify-center bg-black-600 text-white hover:bg-blue-500 rounded-1 flex-1 shrink-0 duration-200 transition-colors text-middle`,
    ]),
    input: twJoin([
      `p-3 rounded-1 bg-black-400 text-white placeholder:text-white placeholder:text-opacity-40 text-middle w-full outline-none mb-5`,
      type !== 'custom' && `!bg-black-200 text-black-500 placeholder:text-black-500 placeholder:text-opacity-30 opacity-0`,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <div className='flex flex-col mf-sm:flex-row mf-md:flex-row gap-1 mb-1'>
          <select
            onChange={onChangeType}
            value={type}
            className={css.select}
          >
            <option value='preset'>프리셋 주사위 세트</option>
            <option value='custom'>주사위식</option>
            <option value='mydice'>사용자 정의 세트</option>
          </select>
          <select
            onChange={onChangeRollType}
            value={rollType}
            className={css.select}
          >
            <option value='default'>일반굴림</option>
            <option value='min'>최소굴림</option>
            <option value='max'>최대굴림</option>
          </select>
        </div>
      </div>
      <div>
        {type === 'preset' && (
          <select
            onChange={onChangePreset}
            value={dice}
            className={twJoin(css.select, `w-full mb-5`)}
          >
            <option value='none'>선택하세요</option>
            {preset.map((item) => (
              <option key={Nihil.uuid(0)} value={item}>{item}</option>
            ))}
          </select>
        )}
        {type === 'mydice' && (
          <select
            onChange={onChangeMyDice}
            value={myDice}
            className={twJoin(css.select, `w-full mb-5`)}
          >
            <option value='none'>선택하세요</option>
            {[ '2D100*3', '3D6*6', ].map((item) => (
              <option key={Nihil.uuid(0)} value={item}>{item}</option>
            ))}
          </select>
        )}
        {type === 'custom' && (
          <input
            type='text'
            placeholder='주사위식을 입력하세요.'
            onKeyDown={onKeydownRoll}
            className={css.input}
            {...register('dice')}
          />
        )}
      </div>
      <div className='flex flex-row gap-1'>
        <button
          onClick={onClickReset}
          disabled={diceResult.length === 0}
          className={twJoin(
            css.button,
            `bg-red-400 hover:bg-red-500`,
            diceResult.length === 0 && `!bg-black-200 text-black-400`
          )}
        >
          초기화
        </button>
        <button
          onClick={onClickRoll}
          className={css.button}
        >
          굴리기
        </button>
      </div>
    </>
  );
}
