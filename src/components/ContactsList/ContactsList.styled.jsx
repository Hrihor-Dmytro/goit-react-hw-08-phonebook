import styled from '@emotion/styled';

export const SectionList = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const SectionLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
  /* margin-bottom: 15px; */
`;
export const ContactTitle = styled.h2`
  text-align: left;
  margin: 0;
  min-width: 150px;
  color: var(--text-color);
  transition: color 500ms linear;
`;
export const ContactTel = styled.a`
  text-decoration: none;
  min-width: 150px;
  font-weight: bold;
  color: var(--text-color);
  transition: color 500ms linear;
  transition: color 250ms ease-in, border 250ms ease-in, color 250ms ease-in;
  &:hover,
  &:focus {
    color: tomato;
  }
`;
export const ContactButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  font-weight: bold;
  color: var(--text-color);
  background-color: var(--background-color);
  transition: color 500ms linear, background-color 500ms linear;
  transition: background-color 500ms linear, border 500ms linear,
    color 500ms linear;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid var(--text-color);
  }
`;
