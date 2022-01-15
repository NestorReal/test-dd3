import React from 'react';
import DateDisplay from '../../atoms/DateDisplay';
import { ListTitleContainer, DateDisplayListContainer, DateDisplayOptionContainer } from './styled';
import { RangeOption } from '../../../types/filters';
import { CUSTOM_RANGES_ID } from '../../../helpers/rangeDateHelpers';

interface ICustomDateDisplayListProps {
  onClickExactDayOption: Function;
  onClickRangeOption: Function;
  customOptions: RangeOption[];
  openCalendar: React.MouseEventHandler<HTMLDivElement>;
  openCalendarRange: React.MouseEventHandler<HTMLDivElement>;
  closeCalendarRange: Function;
  closeCalendar: Function;
  onClickNormalItem?: Function;
}

const CustomDateDisplayList = ({
  onClickExactDayOption,
  onClickRangeOption,
  customOptions,
  openCalendar,
  openCalendarRange,
  closeCalendarRange,
  closeCalendar,
  onClickNormalItem,
}: ICustomDateDisplayListProps) => {
  const [first, second] = customOptions;

  // eslint-disable-next-line operator-linebreak
  const shouldRenderExactDayCalendar =
    first.id === CUSTOM_RANGES_ID.exactDay || second.id === CUSTOM_RANGES_ID.exactDay;

  // eslint-disable-next-line operator-linebreak
  const shouldRenderRangeCalendar =
    first.id === CUSTOM_RANGES_ID.range || second.id === CUSTOM_RANGES_ID.range;

  // eslint-disable-next-line operator-linebreak
  const shouldRenderNormalOption =
    first.id === CUSTOM_RANGES_ID.without || second.id === CUSTOM_RANGES_ID.without;

  const exactDayOption = customOptions.find(
    (element) => element.id === CUSTOM_RANGES_ID.exactDay,
  ) as RangeOption;

  const rangeOption = customOptions.find(
    (element) => element.id === CUSTOM_RANGES_ID.range,
  ) as RangeOption;

  const withououtComparisonOption = customOptions.find(
    (element) => element.id === CUSTOM_RANGES_ID.without,
  ) as RangeOption;

  return (
    <DateDisplayListContainer>
      <ListTitleContainer>Custom</ListTitleContainer>

      {shouldRenderExactDayCalendar && (
        <DateDisplayOptionContainer
          onMouseDown={openCalendar}
          onClick={() => {
            closeCalendarRange();
            onClickExactDayOption();
          }}
        >
          <DateDisplay range={exactDayOption} />
        </DateDisplayOptionContainer>
      )}

      {shouldRenderRangeCalendar && (
        <DateDisplayOptionContainer
          onMouseDown={openCalendarRange}
          onClick={() => {
            closeCalendar();
            onClickRangeOption();
          }}
        >
          <DateDisplay range={rangeOption} />
        </DateDisplayOptionContainer>
      )}

      {shouldRenderNormalOption && onClickNormalItem && (
        <DateDisplayOptionContainer onClick={() => onClickNormalItem(withououtComparisonOption)}>
          <DateDisplay range={withououtComparisonOption} />
        </DateDisplayOptionContainer>
      )}
    </DateDisplayListContainer>
  );
};

export default CustomDateDisplayList;
