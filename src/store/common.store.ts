import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CommonStoreState {
  word: string;
}

export const commonStore = create(
  persist<CommonStoreState>(() => ({
    word: 'JavaScript',
  }), {
    name: 'state/common',
    skipHydration: true,
    storage: createJSONStorage(() => localStorage),
  })
);

export const setWord = (value: string) => {
  commonStore.setState({
    word: value,
  });
};
