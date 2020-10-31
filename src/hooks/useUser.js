import { useContext, useCallback } from 'react';
import Context from '../store/userContext';

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback(({ email, password }) => {
    setJWT('test');
  }, [setJWT]);

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
