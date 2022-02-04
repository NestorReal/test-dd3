/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heatmap from './Heatmap';

export default {
  title: 'Organisms/Heatmap',
  component: Heatmap,
} as ComponentMeta<typeof Heatmap>;

const Template: ComponentStory<typeof Heatmap> = (args) => <Heatmap {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      name: 'Entradas',
      data: [45532, 3692, 21434, 118542, 953, 499543, 10229],
      comparedData: [455, 369, 214, 118, 95, 43299, 109],
      diff: [-45.21, -40.91, -39.08, -75.75, 21.55, -73.24, -69.79],
      colors: ['rgba(8, 48, 107, 255)', 'rgba(42, 122, 185, 255)', 'rgba(8, 56, 119, 255)', 'rgba(31, 111, 179, 255)', 'rgba(15, 91, 163, 255)', 'rgba(24, 102, 172, 255)', 'rgba(17, 93, 165, 255)'],
      mainRange: ["2022-01-01T00:00:00", "2022-01-09T23:59:59"],
      secondaryRange: ["2021-12-01T00:00:00", "2021-12-31T23:59:59"],
    }, {
      name: 'Transacciones',
      data: [45215, 36329, 23214, 13218, 3295, 43299, 109],
      comparedData: [453252, 332692, 214, 1184352, 95653, 497693, 1028729],
      diff: [-45.21, -40.91, -39.08, -75.75, 21.55, -73.24, -69.79],
      colors: ['rgba(8, 48, 107, 255)', 'rgba(42, 122, 185, 255)', 'rgba(8, 56, 119, 255)', 'rgba(31, 111, 179, 255)', 'rgba(15, 91, 163, 255)', 'rgba(24, 102, 172, 255)', 'rgba(17, 93, 165, 255)'],
      mainRange: ["2022-01-01T00:00:00", "2022-01-09T23:59:59"],
      secondaryRange: ["2021-12-01T00:00:00", "2021-12-31T23:59:59"],
    }, {
      name: 'Tasa de conversión',
      data: [10, 20, 30, 20, 10, 10, 10],
      comparedData: [4552, 3692, 214, 1182, 953, 4993, 10229],
      diff: [-45.21, -40.91, -39.08, -75.75, 21.55, -73.24, -69.79],
      colors: ['rgba(8, 48, 107, 255)', 'rgba(42, 122, 185, 255)', 'rgba(8, 56, 119, 255)', 'rgba(31, 111, 179, 255)', 'rgba(15, 91, 163, 255)', 'rgba(24, 102, 172, 255)', 'rgba(17, 93, 165, 255)'],
      mainRange: ["2022-01-01T00:00:00", "2022-01-09T23:59:59"],
      secondaryRange: ["2021-12-01T00:00:00", "2021-12-31T23:59:59"],
    }], 
    colorScale : {"heatmap":{"shadeIntensity":3,"radius":16,"distributed":true,"colorScale":{"ranges":[{"color":"rgba(157,201,224,255),","from":4697,"to":4697,"name":"Tasa de conversión"},{"color":"rgba(8,48,107,255),","from":12348,"to":12348,"name":"Tasa de conversión"},{"color":"rgba(45,125,187,255),","from":8678,"to":8678,"name":"Tasa de conversión"},{"color":"rgba(102,170,212,255),","from":6405,"to":6405,"name":"Tasa de conversión"},{"color":"rgba(88,161,206,255),","from":6912,"to":6912,"name":"Tasa de conversión"},{"color":"rgba(71,149,200,255),","from":7538,"to":7538,"name":"Tasa de conversión"},{"color":"rgba(157,201,224,255),","from":4697,"to":4697,"name":"Transacciones"},{"color":"rgba(8,48,107,255),","from":12348,"to":12348,"name":"Transacciones"},{"color":"rgba(45,125,187,255),","from":8678,"to":8678,"name":"Transacciones"},{"color":"rgba(102,170,212,255),","from":6405,"to":6405,"name":"Transacciones"},{"color":"rgba(88,161,206,255),","from":6912,"to":6912,"name":"Transacciones"},{"color":"rgba(71,149,200,255),","from":7538,"to":7538,"name":"Transacciones"}]}}}
};
