import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';
import StyledText from '../../reusableStyledComponents/StyledText';

export const ContainerCard = styled.div`
  position: relative;
  height: 102px;
  padding: ${space[5]};
  background: ${(props) => props.theme.background.datacard.main};
  border-radius: 8px;
`;

export const TitleCard = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.title};
`;

export const ValueCard = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.value};

  @media (max-width: 1000px) {
    ${fontTypes.heading3}
  }
`;
