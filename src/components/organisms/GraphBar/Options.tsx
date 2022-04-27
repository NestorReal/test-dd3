import { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import { builderTooltip } from './BuilderTooltip';
import changeDateFormat from '../../../helpers/compareTimeHelpers/changeDateFormat';

type GraphBarOptions = Pick<
  ApexOptions,
  'chart' | 'tooltip' | 'plotOptions' | 'responsive' | 'legend' | 'fill'
>;

export const buildOptions = (dates: string[]): GraphBarOptions => {
  const [timeDateFilter, comparisonDateFilter] = dates;
  const [t] = useTranslation("global");
  const graphicDictionary = {
    visitors: t("heatmapLabels.visitors"),
    transactions: t("heatmapLabels.transactions"),
    conversions: t("heatmapLabels.conversions"),
  };
  
  return {
    tooltip: {
      shared: true,
      intersect: false,
      custom(series: any) {
        const { dataPointIndex } = series;
        const { seriesIndex } = series;
        const currentValue = series.series[seriesIndex][dataPointIndex];
        const comparedValue = series.w.config.series[seriesIndex].comparedData[dataPointIndex];
        const diff = series.w.config.series[seriesIndex].diff[dataPointIndex];
        const { mainRange } = series.w.config.series[seriesIndex];
        const { secondaryRange } = series.w.config.series[seriesIndex];
        const labels = series.w.globals.seriesNames;

        const comparison = `
          <hr />
          ${builderTooltip(
            changeDateFormat(secondaryRange),
            labels[seriesIndex],
            comparedValue,
            diff,
            true,
            comparisonDateFilter,
            graphicDictionary,
          )}
        `;
        return `
          <div>
            ${builderTooltip(
              changeDateFormat(mainRange),
              labels[seriesIndex],
              currentValue,
              diff,
              false,
              timeDateFilter,
              graphicDictionary,
            )}
            ${secondaryRange[0] ? comparison : ''}
          </div>
        `;
      },
    },
    chart: {
      type: 'bar',
      stacked: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
};

export const height = 400;
