import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.greyAlt};
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const SideNavList = styled.ul``;

export const SideNavItem = styled.li`
  margin-bottom: 15px;
  text-align: end;
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;

  &.${activeClassName} {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: -20px;
      width: 15px;
      height: 2px;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.colors.greyAlt};
    }
  }
`;
