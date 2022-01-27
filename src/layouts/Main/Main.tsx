import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../config/app/hooks';
import { logout } from '../../features/authSlice';
import TopMenu from '../../components/organisms/TopMenu';
import AsideMenu from '../../components/organisms/AsideMenu';
import LyticaLogo from '../../static/images/logo.png';
import { FullContainer, AsideMenuContainer, TopMenuContainer } from './styled';
import { throttle } from '../../helpers/performance';
import { EMPTY_USER } from '../../config/app/constants';
import { LoginResult } from '../../types/auth';

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const [topMenuHeight, setTopMenuHeight] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setTopMenuHeight(ref.current.clientHeight);
    }
  }, [ref]);

  window.onscroll = throttle(() => {
    if (window.scrollY <= topMenuHeight) {
      setScrollY(window.scrollY);
    } else if (window.scrollY > topMenuHeight && scrollY < topMenuHeight) {
      setScrollY(topMenuHeight);
    }
  }, 40);

  const onCloseSession = () => {
    dispatch(logout());
    navigate('/login');
  };

  const getUserNameFromStorage = () => {
    // eslint-disable-next-line operator-linebreak
    const user: LoginResult['user'] =
      JSON.parse(localStorage.getItem('user') || 'null') || EMPTY_USER;
    return user.username;
  };

  return (
    <>
      <TopMenuContainer ref={ref}>
        <TopMenu
          urlLogo={LyticaLogo}
          userName={getUserNameFromStorage()}
          onCloseSession={onCloseSession}
        />
      </TopMenuContainer>

      <AsideMenuContainer top={topMenuHeight - scrollY}>
        <AsideMenu title="Main Menu" />
      </AsideMenuContainer>

      <FullContainer>
        <Outlet />
      </FullContainer>
    </>
  );
};

export default Main;
