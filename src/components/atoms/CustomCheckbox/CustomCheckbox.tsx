import React from 'react';
import { useField } from 'formik';
import { LabelContainer, StyledCheckboxInput, Checkmark } from './styled';

interface CustomCheckboxProps {
  /**
   * Text next to checkbox
   */
  label: string;
  /**
   * What is the name used for data binding?
   */
  name: string;
  /**
   * Should appear as disabled checkbox?
   */
  disabled?: boolean;
  /**
   * A value, different from a boolean.
   */
  value?: string;

  checked?: boolean;

  // eslint-disable-next-line no-unused-vars
  customOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extraOnChange?: Function;
}
const CustomCheckbox = ({
  label,
  name,
  disabled = false,
  value,
  customOnChange,
  checked,
  extraOnChange,
}: CustomCheckboxProps) => {
  const [field] = useField({ type: 'checkbox', name, value });

  const fieldCopy = { ...field };

  field.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fieldCopy.onChange(e);
    if (extraOnChange) {
      extraOnChange(e);
    }
  };

  field.onChange = customOnChange || field.onChange;

  return (
    <LabelContainer disabled={disabled}>
      {label}
      <StyledCheckboxInput
        type="checkbox"
        disabled={disabled}
        checked={checked}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field} // properties passed: name, onChange, onBlur, value, checked
      />
      <Checkmark />
    </LabelContainer>
  );
};
export default CustomCheckbox;
