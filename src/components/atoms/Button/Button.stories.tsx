/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const SecondaryAndAsync = Template.bind({});

Primary.args = {
  children: 'button',
  primary: true,
  disabled: false,
};

SecondaryAndAsync.args = {
  children: 'button',
  borderRadius: 2,
  async: true,
  onClick: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    }),
  primary: false,
  disabled: false,
};
