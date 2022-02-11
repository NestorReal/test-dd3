import React from 'react';
import Chart from 'react-apexcharts';
import { options, height } from './Options';
import Skeleton from '../../atoms/Skeleton';
import { FormattedDataEntity } from '../../../types/graphs/rangeBar'; 

export interface RangeBarProps {
  /**
   * data json
   */
    data: FormattedDataEntity[],
  /**
   * array colors
   */
     colors: string[],

     isLoading: boolean;

}

const RangeBar = ({ data, colors, isLoading }: RangeBarProps) => {
  if (isLoading) return <Skeleton width="100%" height={300} borderRadius={8} />;
  return(
    <Chart
      options={Object.assign(options, {colors})}
      series={data}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default RangeBar;
