import React from 'react';
import Chart from 'react-apexcharts';
import { FormattedHourAverageResult } from '../../../types/graphs/graphBar';
import { options, height } from './Options';
import Skeleton from '../../atoms/Skeleton';

export interface GraphBarProps {
  /**
   * data json
   */
  data: FormattedHourAverageResult[];
  /**
   * array colors
   */
  colors: string[];
  /**
   * array colors
   */
  labels: string[];

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
