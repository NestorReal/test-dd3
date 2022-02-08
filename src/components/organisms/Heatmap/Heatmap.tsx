import React from 'react';
import Chart from 'react-apexcharts';
import { options, height } from './Options';
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

  isLoading: boolean;
}

const Heatmap = ({ data, colorScale, isLoading }: HeatmapProps) => {
  if (isLoading) return <Skeleton width="100%" height={200} borderRadius={8} />;
  return (
    <Chart
      options={Object.assign(options, { plotOptions: colorScale })}
      series={data}
      type="heatmap"
      width="100%"
      height={height}
    />
  );
};

export default Heatmap;
