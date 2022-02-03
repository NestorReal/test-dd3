/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withFormik } from 'storybook-formik';
import { categoriesOptions, storesOptions } from './mocks/optionsGroups';
import { setCategoriesFilter, setStoresFilter } from '../../../features/filtersSlice';

import Selector from './Selector';

export default {
  title: 'Molecules/Selector',
  component: Selector,
  decorators: [withFormik],
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => <Selector {...args} />;

export const Categories = Template.bind({});
export const Stores = Template.bind({});

Categories.args = {
  selectorTitle: 'Categorías',
  optionGroups: categoriesOptions,
  setFilters: setCategoriesFilter,
};

Categories.parameters = {
  formik: {
    initialValues: {
      searchTerm: '',
      filters: [],
      selectAll: false,
    },
  },
};

Stores.args = {
  selectorTitle: 'Locaciones',
  optionGroups: storesOptions,
  setFilters: setStoresFilter,
};

Stores.parameters = {
  formik: {
    initialValues: {
      searchTerm: '',
      filters: [],
      selectAll: false,
    },
  },
};
