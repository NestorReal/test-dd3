/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectorDropdown from './SelectorDropdown';

const SelectContent = () => <div>Select content</div>;
const DropdownContent = () => <div>Dropdown coneten</div>;

export default {
  title: 'Atoms/SelectorDropdown',
  component: SelectorDropdown,
} as ComponentMeta<typeof SelectorDropdown>;

const Template: ComponentStory<typeof SelectorDropdown> = (args) => <SelectorDropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  selectionContent: <SelectContent />,
  dropDownContent: <DropdownContent />,
  selectorTitle: 'Title',
};
