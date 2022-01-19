/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from './Login';

export default {
  title: 'Molecules/Login',
  component: Login,
  argTypes: {
    // eslint-disable-next-line no-unused-expressions
    onSubmit: (values: any) => { values; },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  link: '',
};
