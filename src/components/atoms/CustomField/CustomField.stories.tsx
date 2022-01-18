/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withFormik } from 'storybook-formik';
import Search from '../../icons/Search';

import CustomField from './CustomField';

export default {
  title: 'Atoms/CustomField',
  component: CustomField,
  decorators: [withFormik],
  argTypes: {
    extraOnChange: { action: 'execute extra action in on change' },
    typography: {
      options: ['paragraph1', 'paragraph2', 'paragraph3'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof CustomField>;

const validationSchema = Yup.object({ user: Yup.string().required('Campo Obligatorio') });

const Template: ComponentStory<typeof CustomField> = (args) => <CustomField {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Usuario',
  name: 'user',
  placeholder: 'Juan Pérez',
  required: false,
  type: 'text',
  isCleaneable: false,
  icon: <Search />,
  height: 0,
};

Primary.parameters = {
  formik: {
    initialValues: {
      user: '',
    },
    validationSchema,
  },
};
