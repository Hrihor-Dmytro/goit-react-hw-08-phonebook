import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 21px;
  color: var(--text-color);
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  &.active {
    color: var(--active-color);
    transition: color 500ms linear, background-color 500ms linear;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--active-color);
    transition: color 500ms linear, background-color 500ms linear;
  }
`;
