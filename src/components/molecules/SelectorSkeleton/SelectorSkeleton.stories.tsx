/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectorSkeleton from './SelectorSkeleton';

export default {
  title: 'Molecules/SelectorSkeleton',
  component: SelectorSkeleton,
} as ComponentMeta<typeof SelectorSkeleton>;

const Template: ComponentStory<typeof SelectorSkeleton> = () => <SelectorSkeleton />;

export const Primary = Template.bind({});
