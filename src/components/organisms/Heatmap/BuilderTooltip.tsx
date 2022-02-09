import './heatmap.css';

// eslint-disable-next-line import/prefer-default-export
export const builderTooltip = (
  initialDate: string,
  finalDate: string,
  label: string,
  currentValue: number,
  diff: number,
  showDiff: boolean,
) =>
  `<div class="tooltipHead">
                    <div class="info">
                        <div>Mes actual</div>
                    </div>
                    <div class="info">
                        <br />
                        <div>${initialDate} / ${finalDate}</div>
                    </div>
                    <div class="info">
                        <div>
                            ${label}
                        </div>
                        <div>
                            ${currentValue}
                        </div>
                    </div>
                    <div class="info">
                        <div>
                            ${showDiff ? 'Diferencia' : ''}
                        </div>
                        <div>
                            ${showDiff ? diff : ''}
                        </div>
                    </div>
                </div>`;
