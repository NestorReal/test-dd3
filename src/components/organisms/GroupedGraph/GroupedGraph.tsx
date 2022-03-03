import React from 'react';
import Chart from 'react-apexcharts';
import { FormattedClassificationHourResult } from '../../../types/graphs/groupedGraph';
import { options, height, getleakedDate } from './Options';
import Skeleton from '../../atoms/Skeleton';

import '../index.css';

export interface GroupedGraphProps {
  /**
   * accepts an array of [data] objects
   */
  data: FormattedClassificationHourResult[];
  /**
   * add chart labels
   */
  optionsData: string[];
  /**
   * add the colors to the graph
   */
  colors: string[];
  /**
   * is displayed when the data is still loading
   */
  isLoading: boolean;
  /**
   * the orientation of the graph can be horizontal or vertical
   */
  horizontal: boolean;
  /**
   * show filter label
   */
  leakedDate?: string;
}

const GroupedGraph = ({ data, optionsData, isLoading, horizontal, colors, leakedDate }: GroupedGraphProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  getleakedDate(leakedDate);
  const plotOptions = {
    bar: {
      horizontal,
      borderRadius: 8,
      distributed: false,
      columnWidth: '55%',
    },
  };

  return (
    <Chart
      options={{ ...options, plotOptions, fill: { colors }, xaxis: { categories: optionsData } }}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default GroupedGraph;
