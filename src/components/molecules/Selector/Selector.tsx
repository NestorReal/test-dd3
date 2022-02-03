import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import Pill from '../../atoms/Pill';
import MultiselectorPicker, { MultiSelectFields } from '../MultiselectPicker';
import { PillsContainer, IdividualPillContainer } from './styled';
import { OptionsGroup } from '../../../types/filters';
import SelectorDropdown from '../../atoms/SelectorDropdown';
import useDropdownProps from '../../../hooks/useDropdownProps';
import { useAppDispatch } from '../../../config/app/hooks';

interface ISelectorProps {
  /**
   * Title for the selector
   */
  selectorTitle: string;
  /**
   * All the groups of options to be rendered
   */
  optionGroups: OptionsGroup[] | undefined;
  setFilters: Function;
}

interface IPillsSelection {
  /**
   * Decides if 'Todos' pill should appear
   */
  shouldShowAllPill: boolean;
  /**
   * A list of names, correspondant to selected checkboxes
   */
  selectionsToAdd: string[];
}

const PillsSelection = ({ shouldShowAllPill, selectionsToAdd }: IPillsSelection) => (
  <PillsContainer>
    {shouldShowAllPill && (
      <IdividualPillContainer>
        <Pill name="Todos" />
      </IdividualPillContainer>
    )}
    {!shouldShowAllPill &&
      selectionsToAdd.map((selection) => (
        <IdividualPillContainer key={uuidv4()}>
          <Pill key={uuidv4()} name={selection} />
        </IdividualPillContainer>
      ))}
  </PillsContainer>
);

const Selector = ({ selectorTitle, optionGroups = [], setFilters }: ISelectorProps) => {
  const { open, toggleOpen, closeDropdown } = useDropdownProps();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const onSubmit = (values: MultiSelectFields) => {
    const { filters } = values;
    const uniqueValues = [...new Set(filters)];
    dispatch(setFilters(uniqueValues));
    closeDropdown();
  };

  const retrieveOptionName = (id: number) => {
    const mappedOptions = optionGroups.map((option) => option.options);
    const flatenOptions = mappedOptions.flat();

    const foundOption = flatenOptions.find((option) => option.id === id);
    if (foundOption) {
      return foundOption.name;
    }
    return null;
  };

  const retrieveNumerOfOptions = () => {
    const mappedOptions = optionGroups.map((option) => option.options);
    const flatenOptions = mappedOptions.flat();
    return flatenOptions.length;
  };

  const retrieveAllValues = () => {
    const mappedIds = optionGroups.map((aGroup) =>
      aGroup.options.map((element) => element.id.toString()),
    );
    const flattenIds = mappedIds.flat();
    return flattenIds;
  };

  useEffect(() => {
    dispatch(setFilters(retrieveAllValues()));
  }, []);

  useEffect(() => {
    dispatch(setFilters(retrieveAllValues()));
  }, [location.pathname]);

  return (
    <Formik
      initialValues={{
        searchTerm: '',
        filters: [],
        selectAll: false,
      }}
      onSubmit={onSubmit}
    >
      {({ values }) => {
        const { filters } = values;
        const selectionsToAdd: string[] = [];
        let shouldShowAllPill = false;

        filters.forEach((filterId) => {
          const name = retrieveOptionName(Number(filterId));
          if (name) {
            selectionsToAdd.unshift(name);
          }
        });

        const numberOfPossibleOptions = retrieveNumerOfOptions();
        if (numberOfPossibleOptions === filters.length) {
          shouldShowAllPill = true;
        }

        return (
          <SelectorDropdown
            open={open}
            close={closeDropdown}
            toggleOpen={toggleOpen}
            selectorTitle={selectorTitle}
            selectionContent={
              <PillsSelection
                shouldShowAllPill={shouldShowAllPill}
                selectionsToAdd={selectionsToAdd}
              />
            }
            dropDownContent={
              <MultiselectorPicker filtersName="filters" optionGroups={optionGroups} />
            }
          />
        );
      }}
    </Formik>
  );
};

export default Selector;
