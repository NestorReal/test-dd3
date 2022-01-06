/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withFormik } from 'storybook-formik';

import FilterOptionsList from './FilterOptionsList';

export default {
  title: 'Molecules/FilterOptionsList',
  component: FilterOptionsList,
  decorators: [withFormik],
} as ComponentMeta<typeof FilterOptionsList>;

const Template: ComponentStory<typeof FilterOptionsList> = (args) => (
  <FilterOptionsList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  filtersName: 'categories',
  name: 'Zona',
  options: [
    {
      id: 1,
      name: 'Norte',
    },
    {
      id: 2,
      name: 'Sur',
    },
    {
      id: 5,
      name: 'Centro',
    },
    {
      id: 4,
      name: 'North',
    },
    {
      id: 8,
      name: 'South',
    },
    {
      id: 9,
      name: 'Center',
    },
    {
      id: 19,
      name: 'West',
    },
    {
      id: 14,
      name: 'Away',
    },
  ],
};

Primary.parameters = {
  formik: {
    initialValues: {
      Zona: [],
    },
  },
};
