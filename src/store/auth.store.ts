import { Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type ProviderType = ('EMAIL' | 'GOOGLE' | 'GITHUB' | 'NAVER' | 'KAKAO' | '');

interface AuthState {
  user: User;
  session: Session;
  provider: ProviderType;
}

export const authStore = create(
  persist<AuthState>(() => ({
    user: null,
    session: null,
    provider: '',
  }), {
    name: 'nihilapps/auth',
    storage: createJSONStorage(() => sessionStorage),
    skipHydration: true,
  })
);

export const setUser = (value: User) => {
  authStore.setState({ user: value, });
};

export const setSession = (value: Session) => {
  authStore.setState({ session: value, });
};

export const setProvider = (value: ProviderType) => {
  authStore.setState({ provider: value, });
};
