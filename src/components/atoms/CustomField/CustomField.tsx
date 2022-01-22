import React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  StyledInput,
  StyledLabel,
  RequiredTag,
  ErrorLabel,
  CleanContainer,
  InputContainer,
  IconContainer,
} from './styled';
import Container from '../../reusableStyledComponents/Container';
import Clean from '../../icons/Clean';
import { inputTypographies } from '../../../types/typography';

export interface ICustomFieldProps {
  /**
   * Name of the field, this name will content info in data-structure
   */
  name: string;
  /**
   * A label to make sense what information is need to be filled in the field
   */
  label?: string;
  /**
   * THe type of the field i.e. password,email, by default is text.
   */
  type?: string;
  /**
   * A placeholder to guide the user
   */
  placeholder?: string;
  /**
   * A function executed in onChange that recieves the input value
   */
  extraOnChange?: Function;
  /**
   * A function executed if clean action is executed
   */
  extraOnClean?: Function;
  /**
   * A possible value taken from the DesignSystem values.
   */
  typography?: inputTypographies;
  /**
   * If true enable * sign in label
   */
  required?: boolean;
  /**
   * If true enable clean button
   */
  isCleaneable?: boolean;
  /**
   * A react component to render as icon in the left side of the input.
   * Its suggested this comoponent to be an SVG component
   */
  icon?: React.ReactNode;
  /**
   * A number in px to determine height of the input.
   */
  height?: number;
}

const CustomInput = ({
  name,
  label,
  type,
  placeholder,
  extraOnChange,
  extraOnClean,
  typography = 'paragraph2',
  required = false,
  isCleaneable = false,
  icon,
  height,
}: ICustomFieldProps) => {
  const [field, meta] = useField({ name, type });
  const { setFieldValue } = useFormikContext();

  const fieldCopy = { ...field };
  field.onChange = (e: React.ChangeEvent<any>) => {
    fieldCopy.onChange(e);
    const { value } = e.target;
    if (extraOnChange) {
      extraOnChange(value);
    }
  };

  const cleanField = () => {
    setFieldValue(field.name, '');
    if (extraOnClean) {
      extraOnClean();
    }
  };

  return (
    <Container display="flex" flexDirection="column">
      {label && (
        <StyledLabel htmlFor={name} typography={typography}>
          {label}
          {required && <RequiredTag>&#42;</RequiredTag>}
        </StyledLabel>
      )}

      <InputContainer // eslint-disable-next-line no-unneeded-ternary
        error={meta.touched && meta.error ? true : false}
        height={height}
      >
        {icon && <IconContainer>{icon}</IconContainer>}

        <StyledInput
          placeholder={placeholder}
          id={name}
          typography={typography}
          isCleaneable={isCleaneable}
          type={type}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
        />
        {isCleaneable && (
          <CleanContainer role="button">
            <Clean onClick={cleanField} />
          </CleanContainer>
        )}
      </InputContainer>

      {meta.touched && meta.error && <ErrorLabel typography={typography}>{meta.error}</ErrorLabel>}
    </Container>
  );
};

export default CustomInput;
