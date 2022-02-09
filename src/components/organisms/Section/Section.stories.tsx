/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Section from './Section';

export default {
  title: 'Organisms/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Objetivos',
  children: <p>Agregar Contenido</p>,
};
