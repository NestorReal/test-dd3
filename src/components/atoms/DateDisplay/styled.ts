import styled from 'styled-components';
import fontTypes from '../../../config/font';

export const RangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LabelContainer = styled.div`
  color: ${(props) => props.theme.text.filters.option};
  ${fontTypes.paragraph3}
`;

export const SideLabelContainer = styled.div`
  color: ${(props) => props.theme.text.filters.option};
  ${fontTypes.caps3Regular}
`;
