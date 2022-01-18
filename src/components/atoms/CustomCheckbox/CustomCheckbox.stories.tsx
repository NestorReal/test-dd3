/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withFormik } from 'storybook-formik';

import CustomCheckbox from './CustomCheckbox';

export default {
  title: 'Atoms/CustomCheckbox',
  component: CustomCheckbox,
  decorators: [withFormik],
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => <CustomCheckbox {...args} />;

export const SendingAValue = Template.bind({});
export const WithoutSendingAValue = Template.bind({});

SendingAValue.args = {
  label: 'Steren Centro',
  name: 'category',
  disabled: false,
  value: '6',
};

WithoutSendingAValue.args = {
  label: 'Steren Centro',
  name: 'on',
  disabled: false,
};
