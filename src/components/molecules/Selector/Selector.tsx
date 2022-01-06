import React, { useState } from 'react';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import Pill from '../../atoms/Pill';
import DoubleArrow from '../../icons/DoubleArrow';
import MultiselectorPicker, { MultiSelectFields } from '../MultiselectPicker';
import {
  SelectorTitle,
  StyledSelector,
  IconContainer,
  MultiselectorContainer,
  PillsContainer,
  IdividualPillContainer,
} from './styled';
import { OptionsGroup } from '../../../types/filters';
import useCloseOnClickOutside from '../../../hooks/useCloseOnClickOutside';

interface ISelectorProps {
  selectorTitle: string;
  /**
   * All the groups of options to be rendered
   */
  optionGroups: OptionsGroup[];
}

const Selector = ({ selectorTitle, optionGroups }: ISelectorProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);
  const { ref } = useCloseOnClickOutside(open, close);

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
            <>
              <SelectorTitle>{selectorTitle}</SelectorTitle>
              <StyledSelector onMouseDown={toggleOpen}>
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

                <IconContainer>
                  <DoubleArrow />
                </IconContainer>
              </StyledSelector>

              <MultiselectorContainer ref={ref} open={open}>
                <MultiselectorPicker
                  open={open}
                  filtersName="filters"
                  optionGroups={optionGroups}
                />
              </MultiselectorContainer>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Selector;
