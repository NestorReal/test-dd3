import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../config/app/hooks';
import { setStoresFilter } from '../../../features/filtersSlice';
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
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [groups, setGroups] = useState(optionGroups);
  const { values, setFieldValue, handleSubmit } = useFormikContext<MultiSelectFields>();
  const { filters, selectAll } = values;

  const retrieveAllValues = (groupOfOptions: OptionsGroup[]) => {
    const mappedIds = groupOfOptions.map((aGroup) =>
      aGroup.options.map((element) => element.id.toString()),
    );
    const flattenIds = mappedIds.flat();
    return flattenIds;
  };

  const selectAllData = retrieveAllValues(groups);

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

  // every time filters change (check or uncheck an option).
  // eval if all posible options are selected in order to autoselect 'All checkbox'
  useEffect(() => {
    const allFiltersValues = retrieveAllValues(groups);
    if (filters.length === allFiltersValues.length) {
      setFieldValue('selectAll', true);
    }
  }, [filters]);

  // everytime pathname changes reselect all
  useEffect(() => {
    setFieldValue(filtersName, selectAllData);
  }, [location.pathname]);

  // when optionsGroups prop changes, refresh groups state
  useEffect(() => {
    setGroups(optionGroups);
    const allIds = retrieveAllValues(optionGroups);
    setFieldValue(filtersName, allIds);
    dispatch(setStoresFilter(allIds));
  }, [optionGroups]);

  const [t] = useTranslation("global");

  return (
    <GroupsContainer>
      <OptionsContainer>
        <SelectAllContainer>
          <CustomCheckbox
            label={t("multiselect")}
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
          {t("filter")}
        </Button>
      </ButtonContainer>
    </GroupsContainer>
  );
};

export default MultiselectPicker;
