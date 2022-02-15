/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counters from './Counters';
import { data } from './mocks/data';

export default {
  title: 'Molecules/Counters',
  component: Counters,
} as ComponentMeta<typeof Counters>;

const Template: ComponentStory<typeof Counters> = (args) => <Counters {...args} />;

export const Primary = Template.bind({});

const counters = {
  first: { ...data.visitors, name: 'Entradas' },
  second: { ...data.transactions, name: 'Transacciones' },
  third: { ...data.conversions, name: 'Tasa de conversión' },
};

Primary.args = {
  counters,
};
