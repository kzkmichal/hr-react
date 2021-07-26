import styled from 'styled-components';

const StyledButton = styled.button`
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default StyledButton;
