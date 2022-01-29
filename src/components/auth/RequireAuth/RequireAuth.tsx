import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { isExpired } from '../../../helpers/auth';
import { useAppSelector } from '../../../config/app/hooks';

interface IRequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: IRequireAuthProps) => {
  const location = useLocation();
  const token = useAppSelector((state) => state.auth.token);
  const expired = isExpired(token);

  if (expired || !token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
