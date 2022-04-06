import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFilterContainer, StyledContent, StyledTitle } from './styled';

interface IFiltersContainerProps {
  title: string;
  children: React.ReactNode;
}

const FiltersContainer = ({ title, children }: IFiltersContainerProps) => {
  const [, i18n] = useTranslation("global");

  return(
    <StyledFilterContainer>
      <StyledContent>
        <StyledTitle>
          {title}
          <button type='button' onClick={() => i18n.changeLanguage("es")}>
            ES
          </button>
          <button type='button' onClick={() => i18n.changeLanguage("en")}>
            EN
          </button>
        </StyledTitle>
        {children}
      </StyledContent>
    </StyledFilterContainer>
  );
};

export default FiltersContainer;
