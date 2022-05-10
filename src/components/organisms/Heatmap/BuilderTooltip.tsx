import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const builderTooltip = (
  date: string,
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
      <div>${date}</div>
    </div>
    <div class="info">
      <div>${label}</div>
      <div>${currentValue}</div>
    </div>
    <div class="info">
      <div>
        ${showDiff ? i18next.t('global:filters.difference') : ''}
      </div>
      <div>
        ${showDiff ? `${diff}%` : ''}
      </div>
    </div>
  </div>`;
