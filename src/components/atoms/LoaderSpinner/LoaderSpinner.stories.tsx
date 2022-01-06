/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoaderSpinner from './LoaderSpinner';

export default {
  title: 'Atoms/LoaderSpinner',
  component: LoaderSpinner,
} as ComponentMeta<typeof LoaderSpinner>;

const Template: ComponentStory<typeof LoaderSpinner> = (args) => <LoaderSpinner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  width: 80,
  height: 80,
};
