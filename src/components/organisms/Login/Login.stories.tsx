/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from './Login';

const data = {
  token: 'pTtr8mGseHhvr08Cu90Pi5Ug8cYJo0phvFi7HRWQYKg',
  user: {
    id: 7,
    last_login: '2022-01-14T17:32:21.394375-06:00',
    is_superuser: true,
    username: 'lytica',
    first_name: '',
    last_name: '',
    email: 'admin@lytica.ai',
    is_staff: true,
    is_active: true,
    date_joined: '2021-10-21T01:14:20.544092-05:00',
    role: [],
  },
};

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms),
  );

export default {
  title: 'Organisms/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  link: '',
  onSubmit: () => sleep(2000),
};
