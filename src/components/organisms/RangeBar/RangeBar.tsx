import React from 'react';
import Chart from 'react-apexcharts';
import { options, height, yaxisData } from './Options';
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

  valueAxis: number;

  isLoading: boolean;
}

const RangeBar = ({ data, colors, isLoading, valueAxis }: RangeBarProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  const yaxis = yaxisData(valueAxis);
  return (
    <Chart
      options={Object.assign(options, { colors }, { yaxis })}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default RangeBar;
