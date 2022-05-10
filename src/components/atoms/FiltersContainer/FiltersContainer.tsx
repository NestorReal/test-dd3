import React from 'react';
import { StyledFilterContainer, StyledContent, StyledTitle } from './styled';

interface IFiltersContainerProps {
  title: string;
  children: React.ReactNode;
}

const FiltersContainer = ({ title, children }: IFiltersContainerProps) => 
    <StyledFilterContainer>
      <StyledContent>
        <StyledTitle>
          {title}
        </StyledTitle>
        {children}
      </StyledContent>
    </StyledFilterContainer>
;

export default FiltersContainer;
