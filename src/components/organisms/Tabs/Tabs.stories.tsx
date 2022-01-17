/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from './Tabs';

export default {
  title: 'Organisms/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

const Childs = (
  <>
    <section>Clientes Section</section>
    <section>Sexo Section</section>
    <section>Edad Section</section>
  </>
);

Primary.args = {
  title: 'entradas por hora del día',
  nameButtons: ['Clientes', 'Sexo', 'Edad'],
  children: Childs,
};
