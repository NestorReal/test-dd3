// eslint-disable-next-line import/prefer-default-export
export const builderTooltip = (
  initialDate: string,
  finalDate: string,
  label: string,
  currentValue: number,
  diff: number,
  showDiff: boolean,
  leakedDate: string,
) =>
  `<div class="tooltipHead">
    <div class="info">
      <div>${leakedDate}</div>
      <div>&nbsp;&nbsp;&nbsp;</div>
      <div>
        ${initialDate && initialDate.substring(0, 10)}
          / 
        ${finalDate && finalDate.substring(0, 10)}
      </div>
    </div>
    <div class="info">
      <div>${label}</div>
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
