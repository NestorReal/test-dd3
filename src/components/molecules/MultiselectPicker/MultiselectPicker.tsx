import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormikContext } from 'formik';
import { OptionsGroup } from '../../../types/filters';
import FilterOptionsList from '../FilterOptionsList';
import {
  GroupContainer,
  GroupsContainer,
  SelectAllContainer,
  OptionsContainer,
  ButtonContainer,
} from './styled';
import CustomField from '../../atoms/CustomField';
import Search from '../../icons/Search';
import CustomCheckbox from '../../atoms/CustomCheckbox';
import Button from '../../atoms/Button';

export interface MultiSelectFields {
  selectAll: boolean;
  filters: string[];
  searchTerm: string;
}

export interface IMultiselectPickerProps {
  /**
   * All the groups of options to be rendered
   */
  optionGroups: OptionsGroup[];
  /**
   * The name under the info of filters is going to accum in formik.
   */
  filtersName: string;
}

const MultiselectPicker = ({ optionGroups, filtersName }: IMultiselectPickerProps) => {
  const [groups, setGroups] = useState(optionGroups);
  const { values, setFieldValue, handleSubmit } = useFormikContext<MultiSelectFields>();
  const { filters, selectAll } = values;

  const retrieveAllValues = () => {
    // eslint-disable-next-line max-len
    const mappedIds = groups.map((aGroup) => aGroup.options.map((element) => element.id.toString()));
    const flattenIds = mappedIds.flat();
    return flattenIds;
  };

  const selectAllData = retrieveAllValues();

  const customOnChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectAll) {
      setFieldValue(filtersName, selectAllData);
    } else {
      setFieldValue(filtersName, []);
    }
    setFieldValue('selectAll', !selectAll);
    // this was added to improve usability, remove focus of current node
    if (e) e.target.blur();
  };

  const searchTerm = (searchValue: string) => {
    const trimmedSearch = searchValue.replace(/\s*/g, '');
    const regEx = new RegExp(`${trimmedSearch}`, 'gi');

    const groupsFiltered = optionGroups.map(({ name, options }) => {
      const filteredOptions = options.filter((option) => {
        const found = option.name.search(regEx);
        if (found === -1) return false;
        return true;
      });
      return {
        name,
        options: filteredOptions,
      };
    });
    setGroups(groupsFiltered);
  };

  const searchForEmptyString = () => {
    searchTerm('');
  };

  useEffect(() => {
    if (!selectAll) {
      customOnChange();
    }
  }, []);

  useEffect(() => {
    const allFiltersValues = retrieveAllValues();
    if (filters.length === allFiltersValues.length) {
      setFieldValue('selectAll', true);
    }
  }, [filters]);

  return (
    <GroupsContainer>
      <OptionsContainer>
        <SelectAllContainer>
          <CustomCheckbox
            label="Todos"
            name="selectAll"
            customOnChange={customOnChange}
            checked={values.selectAll}
          />
        </SelectAllContainer>

        <CustomField
          name="searchTerm"
          placeholder="Buscar"
          icon={<Search />}
          extraOnChange={searchTerm}
          extraOnClean={searchForEmptyString}
          isCleaneable
        />
        {groups.map(({ name, options }) => (
          <GroupContainer key={uuidv4()}>
            <FilterOptionsList
              name={name}
              options={options}
              filtersName={filtersName}
              searchForEmptyString={searchForEmptyString}
            />
          </GroupContainer>
        ))}
      </OptionsContainer>
      <ButtonContainer>
        <Button type="submit" onClick={() => handleSubmit()} primary>
          Filtrar
        </Button>
      </ButtonContainer>
    </GroupsContainer>
  );
};

export default MultiselectPicker;
