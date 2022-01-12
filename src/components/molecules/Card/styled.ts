import styled from 'styled-components';
import space from '../../../config/spacing';
import StyledText from '../../reusableStyledComponents/StyledText';

export const ContainerCard = styled.div`
  position: relative;
  width: 308px;
  height: 70px;
  padding: ${space[5]};
  background: ${(props) => props.theme.background.datacard.main};
  border-radius: 8px;
`;

export const TitleCard = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.title};
`;

export const ValueCard = styled(StyledText)`
  color: ${(props) => props.theme.text.datacard.value};
`;
