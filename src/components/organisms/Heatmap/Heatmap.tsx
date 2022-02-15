import React from 'react';
import Chart from 'react-apexcharts';
import { options, axisData } from './Options';
import { FormattedDayWeekAverageResult } from '../../../types/graphs/heatmap';
import Skeleton from '../../atoms/Skeleton';

export interface HeatmapProps {
  /**
   * data formatted from /visitors/counter-day endpoint
   */
  data: FormattedDayWeekAverageResult[];
  /**
   * colorScale json
   */
  colorScale: object;
  /**
   * categories json
   */
  categories: string[];

  height: number;

  isLoading: boolean;
}

const Heatmap = ({ data, colorScale, isLoading, categories, height }: HeatmapProps) => {
  if (isLoading) return <Skeleton width="100%" height={height} borderRadius={8} />;
  const axisDataJson = axisData(categories);
  return (
    <Chart
      options={{...options, plotOptions: colorScale, xaxis: axisDataJson}}
      series={data}
      type="heatmap"
      width="100%"
      height={height}
    />
  );
};

export default Heatmap;
