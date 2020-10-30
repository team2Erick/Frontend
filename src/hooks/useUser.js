import { useContext, useCallback } from 'react';
import Context from '../store/useContext';

export default function useUser() {
  const {jwt, setJWT} = useContext(Context);

  const login = useCallback(() => {
    setJWT('test');
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
  };
}
