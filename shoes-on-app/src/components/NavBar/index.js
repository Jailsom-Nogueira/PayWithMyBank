import React from 'react';
import styled from 'styled-components';

import UserAvatar from './UserAvatar';

import GoBackButton from '../../components/Buttons/GoBackButton';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.55rem;
  margin-bottom: 0.75rem;
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <GoBackButton />

      <UserAvatar />
    </NavBarContainer>
  );
}
