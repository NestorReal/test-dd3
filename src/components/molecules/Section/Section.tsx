import React, { ReactNode } from 'react';
import { ContainerSection, TitleSection } from './styled';

interface ISection {
  /**
   * section content, if you need to add a group of buttons add the class 'actions'
   */
  children?: ReactNode;
  /**
   * section title
   */
  title: string;
}

const Section = ({
  title,
  children,
}: ISection) => (
  <ContainerSection>
    <div className="header">
      <TitleSection typography="caps1Regular" uppercase>{title}</TitleSection>
    </div>
    <div>
      {children}
    </div>
  </ContainerSection>
);

export default Section;
