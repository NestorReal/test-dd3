import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from 'styled-components';
import { FormattedHourAverageResult } from '../../../types/graphs/graphBar';
import { FormattedClassificationHourResult } from '../../../types/graphs/groupedGraph';
import { height, buildOptions } from './Options';
import Skeleton from '../../atoms/Skeleton';

export interface GraphBarProps {
  /**
   * accepts an array of [data, diff, hour, comparedData, name, mainRange] objects
   */
  data: FormattedHourAverageResult[] | FormattedClassificationHourResult[];
  /**
   * add the colors to the graph
   */
  colors: string[];
  /**
   * add chart labels
   */
  labels: string[];
  /**
   * Should the Skeleton loader be visible?
   */
  isLoading: boolean;
  /**
   * dates labels passed/taken from time and comparison filters
   */
  dateLabelsFromFilter: string[];
  /**
   * Should the orientation be horizontal or vertical?
   */
  horizontal: boolean;
}

const GraphBar = ({
  data,
  colors,
  labels,
  isLoading,
  dateLabelsFromFilter,
  horizontal,
}: GraphBarProps) => {
  const themeContext = useContext(ThemeContext);
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  const plotOptions = {
    bar: {
      borderRadius: 8,
      horizontal,
      distributed: true,
      dataLabels: {
        position: 'top',
        hideOverflowingLabels: false,
      },
    },
  };
  const dataLabels = {
    enabled: true,
    distributed: false,
    offsetY: horizontal ? 0 : -20,
    offsetX: horizontal ? 30 : 0,
    style: {
      fontSize: '12px',
      colors: themeContext.graphs.graphBar.dataLabelsTextColor,
    },
  };

  return (
    <Chart
      options={{
        ...buildOptions(dateLabelsFromFilter),
        plotOptions,
        dataLabels,
        colors,
        xaxis: { categories: labels },
      }}
      series={[data[0]]}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default GraphBar;
