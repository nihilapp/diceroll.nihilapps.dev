import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { RollDiceModResult } from '@nihilncunia/diceroll/dist/@types';

interface CommonStoreState {
  diceResult: RollDiceModResult[][];
}

export const commonStore = create<CommonStoreState>(
  () => ({
    diceResult: [],
  })
);

export const diceResultClear = () => {
  commonStore.setState({
    diceResult: [],
  });
};

export const addDiceResult = (result: RollDiceModResult[]) => {
  commonStore.setState({
    diceResult: [ result, ...commonStore.getState().diceResult, ],
  });
};
