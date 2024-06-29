import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PresetState = {
  formulaString: string;
};

export const presetStore = create(
  persist<PresetState>(
    () => ({
      formulaString: 'D2',
    }),
    {
      name: 'diceroll/preset-state',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function setFormulaString(value: string) {
  presetStore.setState({
    formulaString: value,
  });
}
