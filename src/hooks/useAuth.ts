import { useCallback } from 'react';
import jwtDecode from 'jwt-decode';

import { LocalStorage } from '@/config';

import { useAuthSate } from '@/state';

interface AuthPayload {
  user_id?: number;
}

export const useAuth = () => {
  const [state, set] = useAuthSate();

  const handleAuth = useCallback(
    (accessToken: string) => {
      const payload = jwtDecode<AuthPayload>(accessToken);

      set((S) => ({
        ...S,
        accessToken,
        userId: payload.user_id?.toString(),
      }));

      localStorage.setItem(LocalStorage.AccessToken, accessToken);
    },
    [set]
  );

  const checkAuth = useCallback(() => {
    const accessToken = localStorage.getItem(LocalStorage.AccessToken);
    if (accessToken) {
      handleAuth(accessToken);
    }
  }, [handleAuth]);

  return {
    accessToken: state.accessToken,
    userId: state.userId,
    isAuthenticated: state.isAuthenticated,
    handleAuth,
    set,
    checkAuth,
  };
};
