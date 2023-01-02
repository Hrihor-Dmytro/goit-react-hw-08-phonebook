import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navi = styled.nav`
  margin-right: auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 21px;
  font-weight: 700;
  color: var(--text-color);
  margin-left: 20px;
  margin-right: 20px;
  &.active {
    color: var(--active-color);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--text-color);
  }
`;
