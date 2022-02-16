import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../config/app/hooks';
import {
  setCategoriesFilter,
  setStoresFilter,
  setTimeFilter,
  setComparisonFilter,
} from '../../features/filtersSlice';
import { logout } from '../../features/authSlice';
import TopMenu from '../../components/organisms/TopMenu';
import AsideMenu from '../../components/organisms/AsideMenu';
import LyticaLogo from '../../static/images/logo.png';
import {
  FullContainer,
  AsideMenuContainer,
  TopMenuContainer,
  InsideContainer,
  IndividualContainer,
  BarContainer,
} from './styled';
import { throttle } from '../../helpers/performance';
import { EMPTY_USER } from '../../config/app/constants';
import { LoginResult } from '../../types/auth';
import { useGetCategoriesQuery, useGetStoresByCategoryQuery } from '../../features/vicoApi';
import Selector from '../../components/molecules/Selector';
import SelectorSkeleton from '../../components/molecules/SelectorSkeleton';
import FiltersContainer from '../../components/atoms/FiltersContainer';
import RangeDateSelector from '../../components/molecules/RangeDateSelector';
import ComparisonDateSelector from '../../components/molecules/ComparisonDateSelector';
import StatusBar from '../../components/molecules/StatusBar';

const Main = () => {
  const filtersSelected = useAppSelector((state) => state.filters);
  const statusBarText = `${filtersSelected.time.label} (${filtersSelected.time.sideLabel}) comparado con ${filtersSelected.comparison.label} (${filtersSelected.comparison.sideLabel})`;
  const [scrollY, setScrollY] = useState(0);
  const [topMenuHeight, setTopMenuHeight] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetCategoriesQuery();
  const categoriesSelected = useAppSelector((state) => state.filters.categories);
  const timeSelected = useAppSelector((state) => state.filters.time);

  const { data: storesData, isLoading: storesDataIsLoading } = useGetStoresByCategoryQuery(
    categoriesSelected,
    { skip: categoriesSelected.length === 0 },
  );

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
      <BarContainer>
        <StatusBar
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: 'smooth',
            })
          }
          text={statusBarText}
          hidden={!(scrollY >= 120)}
        />
      </BarContainer>
      <AsideMenuContainer top={topMenuHeight - scrollY}>
        <AsideMenu title="Main Menu" />
      </AsideMenuContainer>

      <FullContainer>
        <FiltersContainer title="Filtros">
          <InsideContainer>
            <IndividualContainer>
              {isLoading ? (
                <SelectorSkeleton />
              ) : (
                <Selector
                  selectorTitle="Categorías"
                  optionGroups={data?.results}
                  setFilters={setCategoriesFilter}
                />
              )}
            </IndividualContainer>

            <IndividualContainer>
              {isLoading || storesDataIsLoading ? (
                <SelectorSkeleton />
              ) : (
                <Selector
                  selectorTitle="Locaciones"
                  optionGroups={storesData?.results}
                  setFilters={setStoresFilter}
                />
              )}
            </IndividualContainer>

            <IndividualContainer>
              <RangeDateSelector
                selectorTitle="Tiempo"
                onClickDropdownItem={setTimeFilter}
                onClickFilterCalendar={setTimeFilter}
                onClickFilterCalendarRange={setTimeFilter}
                onClickExactDayOption={() => {}}
                onClickRangeOption={() => {}}
              />
            </IndividualContainer>

            <IndividualContainer>
              <ComparisonDateSelector
                selectorTitle="Comparado con"
                optionId={timeSelected.id}
                onClickDropdownItem={setComparisonFilter}
                onClickExactDayOption={() => {}}
                onClickRangeOption={() => {}}
                onClickFilterCalendar={setComparisonFilter}
                onClickFilterCalendarRange={setComparisonFilter}
              />
            </IndividualContainer>
          </InsideContainer>
        </FiltersContainer>

        <Outlet />
      </FullContainer>
    </>
  );
};

export default Main;
