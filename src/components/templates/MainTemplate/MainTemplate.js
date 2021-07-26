import React from 'react';
import { Wrapper } from './MainTemplate.styles';

import SideNav from 'components/organisms/SideNav/SideNav';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <SideNav />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
