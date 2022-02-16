/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StatusBar from './StatusBar';

export default {
  title: 'Molecules/StatusBar',
  component: StatusBar,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof StatusBar>;

const Template: ComponentStory<typeof StatusBar> = (args) => <StatusBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Agregar texto',
  hidden: false,
};
