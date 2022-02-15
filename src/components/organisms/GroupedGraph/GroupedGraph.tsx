import React from 'react';
import Chart from 'react-apexcharts';
import { FormattedClassificationHourResult } from '../../../types/graphs/groupedGraph';
import { options, height, horizontalFalse, horizontalTrue } from './Options';
import Skeleton from '../../atoms/Skeleton';

import './groupedGraph.css';

export interface GroupedGraphProps {
  /**
   * data json
   */
  data: FormattedClassificationHourResult[];
  /**
   * option json
   */
  optionsData: string[];

  colors: string[];

  isLoading: boolean;

  horizontal: boolean;
}

const GroupedGraph = ({ data, optionsData, isLoading, horizontal, colors }: GroupedGraphProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  let plotOptions = horizontalFalse;
  if (horizontal) {
    plotOptions = horizontalTrue;
  }
  return (
    <Chart
      options={{...options, plotOptions ,fill: { colors } ,xaxis: { categories: optionsData }}}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default GroupedGraph;
