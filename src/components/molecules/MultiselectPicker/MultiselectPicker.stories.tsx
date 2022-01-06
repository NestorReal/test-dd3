/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withFormik } from 'storybook-formik';

import MultiselectPicker from './MultiselectPicker';

export default {
  title: 'Molecules/MultiselectPicker',
  component: MultiselectPicker,
  decorators: [withFormik],
} as ComponentMeta<typeof MultiselectPicker>;

const Template: ComponentStory<typeof MultiselectPicker> = (args) => (
  <MultiselectPicker {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  filtersName: 'filters',
  open: false,
  optionGroups: [
    {
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
      ],
    },
    {
      name: 'Clase',
      options: [
        {
          id: 3,
          name: 'Clase A++',
        },
        {
          id: 4,
          name: 'Clase B++',
        },
      ],
    },
    {
      name: 'Estado',
      options: [
        {
          id: 6,
          name: 'Ciudad de México',
        },
      ],
    },
    {
      name: 'Tamaño',
      options: [
        {
          id: 7,
          name: 'Grande',
        },
        {
          id: 8,
          name: 'Pequeña',
        },
      ],
    },
  ],
};

Primary.parameters = {
  formik: {
    initialValues: {
      searchTerm: '',
      filters: [],
      selectAll: false,
    },
  },
};
