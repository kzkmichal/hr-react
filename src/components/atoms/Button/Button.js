import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 4px 20px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  font-size: ${({ theme }) => theme.fontSize.m};
  border: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 700;
  min-width: 150px;
`;

const Button = (props) => <StyledButton {...props}></StyledButton>;

export default Button;
