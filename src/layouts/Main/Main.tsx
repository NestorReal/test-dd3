import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopMenu from '../../components/organisms/TopMenu';
import AsideMenu from '../../components/organisms/AsideMenu';
import LyticaLogo from '../../static/images/logo.png';
import { FullContainer, AsideMenuContainer, TopMenuContainer } from './styled';
import { throttle } from '../../helpers/performance';

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const [topMenuHeight, setTopMenuHeight] = useState(0);

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

  return (
    <>
      <TopMenuContainer ref={ref}>
        <TopMenu urlLogo={LyticaLogo} userName="A name" onCloseSession={() => {}} />
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
