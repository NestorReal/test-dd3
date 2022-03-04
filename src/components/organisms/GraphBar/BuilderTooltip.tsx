import { IGraphicDictionary } from '../../../types/graphs/heatmap';

const graphicDictionary = {
  visitors: 'Entradas',
  transactions: 'Transacciones',
  conversions: 'Tasa de conversión',
};

// eslint-disable-next-line import/prefer-default-export
export const builderTooltip = (
  initialDate: string,
  finalDate: string,
  label: string,
  currentValue: number,
  diff: number,
  showDiff: boolean,
  filterDateLabel: string,
) =>
  `<div class="tooltipHead">
    <div class="info">
      <div>${filterDateLabel}</div>
      <div>&nbsp;&nbsp;&nbsp;</div>
      <div>
        ${initialDate && initialDate.substring(0, 10)}
          / 
        ${finalDate && finalDate.substring(0, 10)}
      </div>
    </div>
    <div class="info">
      <div>${graphicDictionary[label as keyof IGraphicDictionary]}</div>
      <div>${currentValue}</div>
    </div>
    <div class="info">
        <div>
            ${showDiff ? 'Diferencia' : ''}
        </div>
        <div>
          ${showDiff ? `${diff}%` : ''}
        </div>
    </div>
  </div>`;
