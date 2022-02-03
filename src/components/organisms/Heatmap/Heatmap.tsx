import React from 'react';
import Chart from 'react-apexcharts';
import Container from '../../reusableStyledComponents/Container';
import { options, width, height } from './Options';


export interface HeatmapProps {
  /**
   * data json
   */
    data: object[],
  /**
   * colorScale json
   */
     colorScale: object,
}

const Heatmap = ({ data, colorScale }: HeatmapProps) => (
  <Container display="flex" justifyContent="space-between" alignItems="center">
    <Chart
      options={Object.assign(options, {plotOptions: colorScale})}
      series={data}
      type="heatmap"
      width={width}
      height={height}
    />
  </Container>
);

export default Heatmap;
