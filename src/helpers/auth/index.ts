/* eslint-disable import/prefer-default-export */
import jwtDecode from 'jwt-decode';

interface Decode {
  exp: number;
}

export const isExpired = (token: string) => {
  if (token) {
    const currentTime = Date.now() / 1000;
    const decoded = jwtDecode<Decode>(token);
    if (decoded.exp < currentTime) {
      return true;
    }
    return false;
  }
  return false;
};
