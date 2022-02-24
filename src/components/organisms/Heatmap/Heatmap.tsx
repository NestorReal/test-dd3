import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from 'styled-components';
import { buildAxisData, buildOptions } from './Options';
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
  const themeContext = useContext(ThemeContext);
  const axisDataConfig = buildAxisData(categories, themeContext.graphs.heatmap);

  return (
    <Chart
      options={{
        ...buildOptions(themeContext.graphs.heatmap),
        plotOptions: colorScale,
        xaxis: axisDataConfig,
      }}
      series={data}
      type="heatmap"
      width="100%"
      height={height}
    />
  );
};

export default Heatmap;
