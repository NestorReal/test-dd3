/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tittle from './Tittle';

export default {
  title: 'Organisms/Tittle',
  component: Tittle,
} as ComponentMeta<typeof Tittle>;

const Template: ComponentStory<typeof Tittle> = (args) => <Tittle  {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  showStats: () => ''
};
