/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LyticaLogo from '../../../static/images/logo.png';

import TopMenu from './TopMenu';

export default {
  title: 'Organisms/TopMenu',
  component: TopMenu,
  argTypes: { onCloseSession: { action: 'close session!' } },
} as ComponentMeta<typeof TopMenu>;

const Template: ComponentStory<typeof TopMenu> = (args) => <TopMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  userName: 'Emmanuel',
  urlLogo: LyticaLogo,
};
