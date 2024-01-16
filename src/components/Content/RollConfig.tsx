'use client';

import React, {
  ChangeEvent,
  MouseEvent, useCallback, useState
} from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { RollDiceModResult, RollDiceResult } from '@nihilncunia/diceroll/dist/@types';
import { useForm } from 'react-hook-form';
import { rollAllDices } from '@nihilncunia/diceroll';
import { diceData } from '@/src/data/dice.data';
import { Nihil } from '@/src/utils/nihil';
import { addDiceResult } from '@/src/store/common.store';

interface Props {
  styles?: ClassNameValue;
}

interface Inputs {
  dice: string;
}

export function RollConfig({ styles, }: Props) {
  const [ type, setType, ] = useState('custom');
  const [ dice, setDice, ] = useState('');
  const [ myDice, setMyDice, ] = useState('none');
  const [ rollType, setRollType, ] = useState('default');
  const [ diceLogs, setDiceLogs, ] = useState<RollDiceModResult[][]>([]);

  const { register, watch, } = useForm<Inputs>();

  const onClickType = useCallback(
    (event: MouseEvent<HTMLSelectElement>) => {
      setType(event.currentTarget.value);
    },
    []
  );

  const onClickDice = useCallback(
    (event: MouseEvent<HTMLSelectElement>) => {
      setDice(event.currentTarget.value);
    },
    []
  );

  const onClickRollType = useCallback(
    (event: MouseEvent<HTMLSelectElement>) => {
      setRollType(event.currentTarget.type);
    },
    []
  );

  const onChangeMyDice = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setMyDice(event.target.value);
    },
    []
  );

  const onClickRoll = useCallback(
    () => {
      if (type === 'custom') {
        const result = rollAllDices(watch('dice'));

        addDiceResult(result);
      } else if (type === 'preset') {
        let presetDice: RollDiceResult;

        diceData.forEach((item) => {
          if (item.dice === dice) {
            presetDice = item;
          }
        });

        const result = [ {
          diceDetails: [
            presetDice,
          ],
          diceTotal: presetDice.total,
          formula: presetDice.dice,
          modDetails: [],
        }, ] as RollDiceModResult[];

        addDiceResult(result);
      } else {
        const result = rollAllDices(myDice);

        addDiceResult(result);
      }
    },
    [ diceData, dice, type, myDice, ]
  );

  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <select onClick={onClickType} defaultValue='custom'>
          <option value='preset'>프리셋 주사위 세트</option>
          <option value='custom'>주사위식</option>
          <option value='mydice'>사용자 정의 세트</option>
        </select>
        {type === 'preset' && (
          <select onClick={onClickDice} defaultValue='D2'>
            <option value='D2'>D2</option>
            <option value='D4'>D4</option>
            <option value='D6'>D6</option>
            <option value='D8'>D8</option>
            <option value='D10'>D10</option>
            <option value='D12'>D12</option>
            <option value='D20'>D20</option>
            <option value='D100'>D100</option>
            <option value='2D4'>2D4</option>
            <option value='2D8'>2D8</option>
            <option value='2D10'>2D10</option>
            <option value='3D4'>3D4</option>
            <option value='3D6'>3D6</option>
            <option value='3D8'>3D8</option>
          </select>
        )}
        {type === 'mydice' && (
          <select onChange={onChangeMyDice} value={myDice}>
            <option value='none'>선택하세요</option>
            {[ '2D100*3', '3D6*6', ].map((item) => (
              <option key={Nihil.uuid(0)} value={item}>{item}</option>
            ))}
          </select>
        )}
        <select onClick={onClickRollType}>
          <option value='default'>일반굴림</option>
          <option value='min'>최소굴림</option>
          <option value='max'>최대굴림</option>
        </select>
      </div>
      {type === 'custom' && (
        <div>
          <input type='text' placeholder='주사위식을 입력하세요.' {...register('dice')} />
        </div>
      )}
      <button onClick={onClickRoll}>굴리기</button>
    </>
  );
}
