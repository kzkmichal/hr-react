import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyAlt};
`;
const LogoWrapper = styled.div`
  width: 150px;
  border-right: 1px solid ${({ theme }) => theme.colors.greyAlt};
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Logo = styled.p`
  margin-top: 20px;
  padding: 15px;
  text-align: end;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>
          Study <br /> Buddy
        </Logo>
      </LogoWrapper>
      <HeaderContent></HeaderContent>
    </Wrapper>
  );
};

export default Header;
