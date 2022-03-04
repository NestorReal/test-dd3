import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from 'styled-components';
import { buildAxisData, buildOptions } from './Options';
import { FormattedDayWeekAverageResult } from '../../../types/graphs/heatmap';
import Skeleton from '../../atoms/Skeleton';

export interface HeatmapProps {
  /**
   * accepts an array of [data, diff, comparedData, colors, name, mainRange, secondaryRange] objects
   */
  data: FormattedDayWeekAverageResult[];
  /**
   * configure the colors and the iterations of the graph
   */
  colorScale: object;
  /**
   * add the categories we need to display
   */
  categories: string[];
  /**
   * change the height of the graph
   */
  height: number;
  /**
   * Should the Skeleton loader be visible?
   */
  isLoading: boolean;
  /**
   * dates labels passed/taken from time and comparison filters
   */
  dateLabelsFromFilters: string[];
}

const Heatmap = ({
  data,
  colorScale,
  isLoading,
  categories,
  height,
  dateLabelsFromFilters,
}: HeatmapProps) => {
  if (isLoading) return <Skeleton width="100%" height={height} borderRadius={8} />;
  const themeContext = useContext(ThemeContext);
  const axisDataConfig = buildAxisData(categories, themeContext.graphs.heatmap);
  return (
    <Chart
      options={{
        ...buildOptions(themeContext.graphs.heatmap, dateLabelsFromFilters),
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
