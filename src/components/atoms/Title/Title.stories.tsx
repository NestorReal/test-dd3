/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Objetivos por tienda',
  typography: 'caps1Regular',
  uppercase: false,
};
