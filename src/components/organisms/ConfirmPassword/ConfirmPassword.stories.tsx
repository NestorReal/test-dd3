/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConfirmPassword from './ConfirmPassword';

export default {
  title: 'Organisms/ConfirmPasswords',
  component: ConfirmPassword,
  argTypes: {
    // eslint-disable-next-line no-unused-expressions
    onSubmit: (values: any) => {
      // eslint-disable-next-line no-unused-expressions
      values;
    },
  },
} as ComponentMeta<typeof ConfirmPassword>;

const Template: ComponentStory<typeof ConfirmPassword> = (args) => <ConfirmPassword {...args} />;

export const Primary = Template.bind({});
