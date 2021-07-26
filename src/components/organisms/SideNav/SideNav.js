import React from 'react';
import {
  SideNavItem,
  SideNavList,
  Wrapper,
  Logo,
  StyledLink,
} from './SideNav.styles';

function SideNav() {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>

      <SideNavList>
        <SideNavItem>
          <StyledLink activeClassName={'active-link'} exact to={'/'}>
            Dashboard
          </StyledLink>
        </SideNavItem>
        <SideNavItem>
          <StyledLink activeClassName={'active-link'} to={'/add-user'}>
            Add User
          </StyledLink>
        </SideNavItem>
        {/* <SideNavItem>
          <StyledLink activeClassName={'active-link'} to={'#_'}>
            Settings
          </StyledLink>
        </SideNavItem>
        <SideNavItem>
          <StyledLink activeClassName={'active-link'} to={'#_'}>
            Logout
          </StyledLink>
        </SideNavItem> */}
      </SideNavList>
    </Wrapper>
  );
}
export default SideNav;
