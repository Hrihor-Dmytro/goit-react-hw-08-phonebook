import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;
export const Buttons = styled.button`
  color: var(--text-color);
  background-color: var(--background-color);
  margin-right: 5px;
  border: 1px solid var(--input-border-color);
  border-radius: 5px;
  padding: 5px 10px;
  transition: color 500ms linear, background-color 500ms linear;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid var(--text-color);
  }
`;
