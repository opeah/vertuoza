import { atom, useRecoilState } from 'recoil';

export interface AuthState {
  accessToken: string | undefined;
  userId: string | undefined;
  isAuthenticated: boolean;
}

export const authState = atom<AuthState>({
  key: `AuthState`,
  default: {
    accessToken: undefined,
    userId: undefined,
    isAuthenticated: false,
  },
});

export const useAuthSate = () => {
  return useRecoilState(authState);
};
