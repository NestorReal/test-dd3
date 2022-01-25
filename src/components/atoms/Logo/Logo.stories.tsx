/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';
import LyticaLogo from '../../../static/images/logo.png';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: { onCloseSession: { action: 'close session!' } },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  url: LyticaLogo,
};
