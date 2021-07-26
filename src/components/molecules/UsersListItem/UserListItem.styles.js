import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 20px 0;
`;

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, value }) => {
    if (value < 3) {
      return theme.colors.error;
    }
    if (value > 3 && value < 4.5) {
      return theme.colors.warning;
    }
    if (value > 4.5) {
      return theme.colors.success;
    }
  }};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;
