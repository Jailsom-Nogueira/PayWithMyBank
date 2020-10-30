import React from 'react';
import UserAvatar from './UserAvatar';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  width: 100%;
  padding: 0.55rem;
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <UserAvatar />
    </NavBarContainer>
  );
}
