/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectorDropdown from './SelectorDropdown';

export default {
  title: 'Atoms/SelectorDropdown',
  component: SelectorDropdown,
} as ComponentMeta<typeof SelectorDropdown>;

const Template: ComponentStory<typeof SelectorDropdown> = (args) => <SelectorDropdown {...args} />;

export const Primary = Template.bind({});

const SelectionContent = () => <div>Here is selection content</div>;
const DropDownContent = () => <div>Here is dropdown content</div>;
Primary.args = {
  selectionContent: <SelectionContent />,
  dropDownContent: <DropDownContent />,
  selectorTitle: 'Categorías',
};
