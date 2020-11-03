import React from 'react';
import styled from 'styled-components';

import UserAvatar from './UserAvatar';

import GoBackButton from '../../components/Buttons/GoBackButton';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export default function NavBar() {
  const mql = window.matchMedia('(min-width: 600px)');
  const mobileView = mql.matches;
  const pageName = mobileView ? <p>Checkout</p> : <div></div>;

  return (
    <NavBarContainer>
      <GoBackButton />
      {pageName}
      <UserAvatar />
    </NavBarContainer>
  );
}
