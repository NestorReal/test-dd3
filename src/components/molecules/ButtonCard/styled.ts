import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';
import StyledText from '../../reusableStyledComponents/StyledText';

export const ContainerCard = styled.div`
  position: relative;
  height: 76px;
  width: 76px;
  padding: ${space[5]};
  border-radius: 5px;
`;

export const ValueCard = styled(StyledText)`
  margin-left: 10px;
  margin-top: -2px;
  color: ${(props) => props.theme.text.datacard.value}
  @media (max-width: 1000px) {
    ${fontTypes.heading3}
  }
`;
