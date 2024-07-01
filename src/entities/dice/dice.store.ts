import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { RollResult } from '@nihilapp/dice';

type PresetState = {
  formulaString: string;
  rollResults: RollResult[][];
};

export const diceStore = create(
  persist<PresetState>(
    () => ({
      formulaString: '',
      rollResults: [],
    }),
    {
      name: 'diceroll/dice-state',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function setFormulaString(value: string) {
  diceStore.setState({
    formulaString: value,
  });
}

export function addRollResult(value: RollResult[]) {
  const { rollResults, } = diceStore.getState();

  diceStore.setState({
    rollResults: [ value, ...rollResults, ],
  });
}

export function resetRollResult() {
  diceStore.setState({
    rollResults: [],
  });
}
