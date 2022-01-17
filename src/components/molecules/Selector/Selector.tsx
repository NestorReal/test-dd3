import React from 'react';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import Pill from '../../atoms/Pill';
import MultiselectorPicker, { MultiSelectFields } from '../MultiselectPicker';
import SelectorDropdown from '../../atoms/SelectorDropdown';
import { PillsContainer, IdividualPillContainer } from './styled';
import { OptionsGroup } from '../../../types/filters';

interface ISelectorProps {
  /**
   * Title for the selector
   */
  selectorTitle: string;
  /**
   * All the groups of options to be rendered
   */
  optionGroups: OptionsGroup[];
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
    {!shouldShowAllPill
      && selectionsToAdd.map((selection) => (
        <IdividualPillContainer key={uuidv4()}>
          <Pill key={uuidv4()} name={selection} />
        </IdividualPillContainer>
      ))}
  </PillsContainer>
);

const Selector = ({ selectorTitle, optionGroups }: ISelectorProps) => {
  const onSubmit = (values: MultiSelectFields) => {
    const { filters } = values;
    const uniqueValues = [...new Set(filters)];
    // eslint-disable-next-line no-alert
    alert(`submit ${uniqueValues}`);
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

  return (
    <div>
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
              selectorTitle={selectorTitle}
              selectionContent={(
                <PillsSelection
                  shouldShowAllPill={shouldShowAllPill}
                  selectionsToAdd={selectionsToAdd}
                />
              )}
              dropDownContent={
                <MultiselectorPicker filtersName="filters" optionGroups={optionGroups} />
              }
            />
          );
        }}
      </Formik>
    </div>
  );
};

export default Selector;
