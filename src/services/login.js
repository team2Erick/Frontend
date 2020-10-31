import api from './api';

export default function login({ email, password }) {
  api.post('auth/login', {
    email,
    password,
    body: JSON.stringify({username, password});
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const {jwt} = res
    return jwt
  })
}
