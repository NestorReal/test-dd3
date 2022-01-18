import styled from 'styled-components';
import space from '../../../config/spacing';

export const GroupsContainer = styled.div``;

export const GroupContainer = styled.div`
  margin-top: ${space[4]};
`;

export const SelectAllContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borders.usermenu};
  padding-top: ${space[4]};
  padding-bottom: ${space[3]};
  padding-left: ${space[3]};
  margin-bottom: ${space[4]};

  &:hover {
    background: ${(props) => props.theme.background.aside.secondary};
  }
`;

export const OptionsContainer = styled.div`
  padding: ${space[2]} ${space[3]} 0 ${space[3]};
`;

export const ButtonContainer = styled.div`
  position: sticky;
  bottom: 0px;
`;
