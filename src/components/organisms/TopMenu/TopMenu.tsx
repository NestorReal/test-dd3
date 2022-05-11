import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import Container from '../../reusableStyledComponents/Container';
import Logo from '../../atoms/Logo';
import Avatar from '../../atoms/Avatar';
import UserMenuDropDown from '../../molecules/UserMenuDropDown';


export interface ITopMenuProps {
  /**
   * User name which is logged in
   */
  userName: string;
  /**
   * A url string to point to an image file
   */
  urlLogo: string;
  /**
   * A function in charge of close Session
   */
  onCloseSession: Function;
}

const TopMenu = ({ userName, urlLogo, onCloseSession }: ITopMenuProps) => {
  const [, i18n] = useTranslation("global");
  const options = [
    { value: 'Español', label: 'Español' },
    { value: 'Ingles', label: 'Ingles' },
  ];
  const styles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
    }),
    option: (provided: any) => ({
      ...provided,
      color: '#1c1c1c',
    }),
  };
  const optionT = (event: any) => {
    switch (event.value) {
      case 'Español':
        i18n.changeLanguage("es");
        break;
      case 'Ingles':
        i18n.changeLanguage("en");
        break;
      default:
        i18n.changeLanguage("es");
        break;
    }
  }
  return (
    <Container display="flex" justifyContent="space-between" alignItems="center" width="100%">
      <Logo url={urlLogo} />
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Select
          options={options}
          defaultValue={options[0]}
          styles={styles}
          onChange={optionT}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#D0D3D4',
              primary: 'neutral0',
              primary50: '#D0D3D4'
            },
          })}
        />
        &nbsp;&nbsp;&nbsp;
        <Avatar name={userName.slice(0, 1)} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UserMenuDropDown userName={userName} onCloseSession={onCloseSession} />
        &nbsp;&nbsp;&nbsp;
      </Container>
    </Container>
  );
};

export default TopMenu;
