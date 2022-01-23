import styled from 'styled-components';
import { ListTitle, ItemContainer } from '../FilterOptionsList/styled';
import space from '../../../config/spacing';

export const ListTitleContainer = styled(ListTitle)`
  padding-left: ${space[3]};
  margin-top: ${space[3]};
`;
export const DateDisplayListContainer = styled.div``;
export const DateDisplayOptionContainer = styled(ItemContainer)`
  cursor: pointer;
`;
