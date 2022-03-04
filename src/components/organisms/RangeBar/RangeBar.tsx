import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from 'styled-components';
import { buildOptions, height, buildYAxisData } from './Options';
import Skeleton from '../../atoms/Skeleton';
import { FormattedDataEntity } from '../../../types/graphs/rangeBar';

export interface RangeBarProps {
  /**
   * data json
   */
  data: FormattedDataEntity[];
  /**
   * array colors
   */
  colors: string[];
  /**
   * A value to represent the maximum axis value
   */
  valueAxis: number;
  /**
   * Should the Skeleton loader be visible?
   */
  isLoading: boolean;
}

const RangeBar = ({ data, colors, isLoading, valueAxis }: RangeBarProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  const themeContext = useContext(ThemeContext);
  const yaxisDataConfig = buildYAxisData(valueAxis, themeContext.graphs.rangeBar);
  return (
    <Chart
      options={{ ...buildOptions(themeContext.graphs.rangeBar), colors, yaxis: yaxisDataConfig }}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default RangeBar;
