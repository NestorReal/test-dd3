/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PanelResults from './PanelResults';

export default {
  title: 'Organisms/PanelResults',
  component: PanelResults,
} as ComponentMeta<typeof PanelResults>;

const Template: ComponentStory<typeof PanelResults> = (args) => <PanelResults {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF'
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF'
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF'
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF'
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF'
    },
  ],
};
