import React, { ReactNode } from 'react';
import { SectionStyled, TitleStyled, ContainerChildren } from './styled';
import Title from '../../atoms/Title';

export interface ISection {
  /**
   * content title
   */
  title: string;
  /**
   * add content
   */
  children: ReactNode;
}

const Section = ({ title, children }: ISection) => (
  <SectionStyled>
    <TitleStyled>
      <Title typography="paragraph1" text={title} />
    </TitleStyled>
    <ContainerChildren>{children}</ContainerChildren>
  </SectionStyled>
);

export default Section;
