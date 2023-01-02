import styled from '@emotion/styled';

export const RegisterLoginInfo = styled.div`
  display: flex;
  align-items: end;
`;

export const LoginGreeting = styled.div`
  display: flex;
  text-decoration: none;
  font-size: 30px;
  color: var(--text-color);
  margin-right: 20px;
`;

export const UserName = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: var(--text-color);
`;

export const LogButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: var(--background-color);
  border: 1px solid var(--input-border-color);
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-color);
  outline-color: var(--text-color);
  transition: color 500ms linear, background-color 500ms linear;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid var(--text-color);
  }
`;
