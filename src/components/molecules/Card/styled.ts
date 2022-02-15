import styled from 'styled-components';
import space from '../../../config/spacing';
import StyledText from '../../reusableStyledComponents/StyledText';

export const ContainerCard = styled.div`
  position: relative;
  max-width: 340px;
  width: calc(100% / 3);
  height: 102px;
  padding: ${space[5]};
  margin: ${space[3]};
  background: ${(props) => props.theme.background.datacard.main};
  border-radius: 8px;
`;

export const TitleCard = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.title};
`;

export const ValueCard = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.value};
`;
