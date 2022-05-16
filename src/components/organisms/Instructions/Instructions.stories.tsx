/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Instructions from './Instructions';

export default {
  title: 'Organisms/Instructions',
  component: Instructions,
} as ComponentMeta<typeof Instructions>;

const Template: ComponentStory<typeof Instructions> = (args) => <Instructions {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onchange: () => '',
};
