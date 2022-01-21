/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ForgotPassword from './ForgotPassword';

export default {
  title: 'Molecules/ForgotPassword',
  component: ForgotPassword,
  argTypes: {
    // eslint-disable-next-line no-unused-expressions
    onSubmit: (values: any) => { values; },
  },
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = (args) => <ForgotPassword {...args} />;

export const Primary = Template.bind({});
