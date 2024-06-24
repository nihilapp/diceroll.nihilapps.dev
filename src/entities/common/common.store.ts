import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CommonState = {
  darkMode: boolean;
  mainColor: string;
  sideOpen: boolean;
};

export const commonStore = create(
  persist<CommonState>(
    () => ({
      darkMode: false,
      mainColor: '',
      sideOpen: false,
    }),
    {
      name: 'project/common-state',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function setDarkMode(value: boolean) {
  commonStore.setState({
    darkMode: value,
  });
}

export function toggleSideOpen() {
  const { sideOpen, } = commonStore.getState();

  commonStore.setState({
    sideOpen: !sideOpen,
  });
}

export function setSideOpen(value: boolean) {
  commonStore.setState({
    sideOpen: value,
  });
}
