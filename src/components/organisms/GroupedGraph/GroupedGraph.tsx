import React from 'react';
import Chart from 'react-apexcharts';
import { FormattedClassificationHourResult } from '../../../types/graphs/groupedGraph';
import { options, height } from './Options';
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

  isLoading: boolean;
}

const GroupedGraph = ({ data, optionsData, isLoading }: GroupedGraphProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  return (
    <Chart
      options={Object.assign(options, { xaxis: { categories: optionsData } })}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default GroupedGraph;
