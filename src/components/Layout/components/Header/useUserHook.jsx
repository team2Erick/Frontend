import { useCallback, useContext, useState } from 'react';
import Store from '../../../../store';

export default function useUser() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT } useContext(Store)

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
};