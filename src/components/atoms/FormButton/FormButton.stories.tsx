/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormButton from './FormButton';

export default {
  title: 'Atoms/FormButton',
  component: FormButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof FormButton>;

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args} />;

export const Primary = Template.bind({});
export const SecondaryAndAsync = Template.bind({});

Primary.args = {
  children: 'FormButton',
  primary: true,
  disabled: false,
  loading: false,
};

SecondaryAndAsync.args = {
  children: 'FormButton',
  borderRadius: 2,
  primary: false,
  disabled: false,
  loading: false,
};
