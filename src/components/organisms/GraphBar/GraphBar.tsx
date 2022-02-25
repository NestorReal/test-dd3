import React from 'react';
import Chart from 'react-apexcharts';
import { FormattedHourAverageResult } from '../../../types/graphs/graphBar';
import { options, height } from './Options';
import Skeleton from '../../atoms/Skeleton';

export interface GraphBarProps {
  /**
   * accepts an array of [data, diff, hour, comparedData, name, mainRange] objects
   */
  data: FormattedHourAverageResult[];
  /**
   * add the colors to the graph
   */
  colors: string[];
  /**
   * add chart labels
   */
  labels: string[];
  /**
   * is displayed when the data is still loading
   */
  isLoading: boolean;
}

const GraphBar = ({ data, colors, labels, isLoading }: GraphBarProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  return (
    <Chart
      options={Object.assign(options, { colors }, { xaxis: { categories: labels } })}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default GraphBar;
