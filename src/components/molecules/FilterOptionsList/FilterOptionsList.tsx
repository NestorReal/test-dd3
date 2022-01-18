import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormikContext } from 'formik';
import Container from '../../reusableStyledComponents/Container';
import { GenericOption } from '../../../types/filters';
import { ListTitle, ItemContainer, ListContainer } from './styled';
import CustomCheckbox from '../../atoms/CustomCheckbox';

export interface IFilterOptionsListProps {
  /**
   * Name for the option group
   */
  name: string;
  /**
   * Options which belong to the name group
   */
  options: GenericOption[];
  /**
   * This is a function to execute on every onChange of checkboxes.
   * Te intention is to clean the input in MultiselectPicker and return
   * to show all possible options
   */
  searchForEmptyString: Function;
  /**
   * This is the name where the info is going to accumm in formik.
   */
  filtersName: string;
}

const FilterOptionsList = ({
  name,
  options,
  filtersName,
  searchForEmptyString,
}: IFilterOptionsListProps) => {
  const { setFieldValue } = useFormikContext();

  const extraOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('selectAll', false);
    // this action is used to remove current focus, and make the component more usable
    e.target.blur();
  };

  const cleanSearchInput = () => {
    setFieldValue('searchTerm', '');
  };

  if (options.length > 0) {
    return (
      <Container>
        <ListTitle>{name}</ListTitle>
        <ListContainer>
          {options.length > 0
            && options.map(({ name: label, id }) => (
              <ItemContainer key={uuidv4()}>
                <CustomCheckbox
                  label={label}
                  name={`${filtersName}`}
                  value={`${id}`}
                  extraOnChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    extraOnChange(e);
                    searchForEmptyString();
                    cleanSearchInput();
                  }}
                />
              </ItemContainer>
            ))}
        </ListContainer>
      </Container>
    );
  }
  return null;
};

export default FilterOptionsList;
