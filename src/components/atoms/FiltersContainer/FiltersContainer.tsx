import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFilterContainer, StyledContent, StyledTitle } from './styled';
import Switch from '../Switch';

interface IFiltersContainerProps {
  title: string;
  children: React.ReactNode;
}

const FiltersContainer = ({ title, children }: IFiltersContainerProps) => {
  const [, i18n] = useTranslation("global");
  const [translate, seTranslate] = useState(false);
  const t = (event: any) => {
    seTranslate(event.target.checked)
    if (translate) {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }  
  
  return(
    <StyledFilterContainer>
      <StyledContent>
        <StyledTitle>
          {title}
          <Switch onChange={t} labels={['Es','En']}/>
        </StyledTitle>
        {children}
      </StyledContent>
    </StyledFilterContainer>
  );
};

export default FiltersContainer;
