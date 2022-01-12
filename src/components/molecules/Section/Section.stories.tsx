/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../atoms/Button';
import GroupButton from '../../atoms/GroupButton';

import Section from './Section';

export default {
  title: 'Molecules/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Primary = Template.bind({});

const Container = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="actions">
        <GroupButton width={200}>
          <Button
            primary={state === 0}
            onClick={() => setState(0)}
          >
            Clientes
          </Button>
          <Button
            primary={state === 1}
            onClick={() => setState(1)}
          >
            Sexo
          </Button>
          <Button
            primary={state === 2}
            onClick={() => setState(2)}
          >
            Edad
          </Button>
        </GroupButton>
      </div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {state === 0
        ? 'Clientes'
        // eslint-disable-next-line no-nested-ternary
        : state === 1
          ? 'Sexo'
          : state
            ? 'Edad'
            : null}
    </>
  );
};

Primary.args = {
  title: 'entradas por hora del día',
  children: <Container />,
};
