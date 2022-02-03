/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FiltersContainer from './FiltersContainer';

export default {
  title: 'Atoms/FiltersContainer',
  component: FiltersContainer,
} as ComponentMeta<typeof FiltersContainer>;

const Template: ComponentStory<typeof FiltersContainer> = (args) => <FiltersContainer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Filters',
  children: 'Some content',
};
