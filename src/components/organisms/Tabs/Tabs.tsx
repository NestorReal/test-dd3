import React, { useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../atoms/Button';
import {
  StyledTabs, TitleTabs, ContainerTabs, ActionsTabs,
} from './styled';
import Container from '../../reusableStyledComponents/Container';

export interface ITabs {
  /**
   * content title
   */
  title: string;
  /**
   * name of the buttons
   */
  nameButtons?: string[];
  /**
   * separate content into sections
  */
  children: ReactNode;
}

const Tabs = ({ title, nameButtons, children }: ITabs) => {
  const [state, setState] = useState(0);

  return (
    <StyledTabs>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <TitleTabs uppercase typography="caps1Regular">
          {title}
        </TitleTabs>
        <ActionsTabs>
          {nameButtons
            ? nameButtons.map<ReactNode>((item, index) => (
              <Button
                key={uuidv4()}
                primary={index === state}
                onClick={() => setState(index)}
                type="button"
                typography="paragraph3"
              >
                {item}
              </Button>
            ))
            : null}
        </ActionsTabs>
      </Container>
      <ContainerTabs child={state + 1}>
        {children}
      </ContainerTabs>
    </StyledTabs>
  );
};

export default Tabs;
