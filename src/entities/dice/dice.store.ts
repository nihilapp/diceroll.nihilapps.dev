import { create } from 'zustand';
import { RollResult } from '@nihilapp/dice';

type DiceState = {
  formulaString: string;
  rollType: ('default' | 'min' | 'max');
  rollResults: RollResult[][];
};

export const diceStore = create<DiceState>(
  () => ({
    formulaString: '',
    rollType: 'default',
    rollResults: [],
  })
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

export function setRollType(value: ('default' | 'min' | 'max')) {
  diceStore.setState({
    rollType: value,
  });
}
