import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  ${Label} {
    margin-bottom: 10px;
  }
`;

const FormField = React.forwardRef(
  (
    { value, onChange, label, name, id, type = 'text', checked, ...props },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          ref={ref}
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          checked={checked}
        ></Input>
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default FormField;
