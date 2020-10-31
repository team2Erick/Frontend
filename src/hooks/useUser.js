import { useState, useContext, useCallback } from 'react';
import Context from '../store/userContext';
import loginService from '../services/login';

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const [state, setState] = useState();

  const login = useCallback(
    ({ email, password }) => {
    loginService({ email, password }).then((jwt) => {
        setJWT(jwt);
      });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
