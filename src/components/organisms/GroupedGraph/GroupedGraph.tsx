import React from 'react';
import Chart from 'react-apexcharts';
import { FormattedClassificationHourResult } from '../../../types/graphs/groupedGraph';
import { buildOptions, height } from './Options';
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
   * A date label taken/passed from filter
   */
  dateFromFilter: string;
}

const GroupedGraph = ({
  data,
  optionsData,
  isLoading,
  horizontal,
  colors,
  dateFromFilter,
}: GroupedGraphProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
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
      options={{
        ...buildOptions(dateFromFilter),
        plotOptions,
        fill: { colors },
        xaxis: { categories: optionsData },
      }}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default GroupedGraph;
