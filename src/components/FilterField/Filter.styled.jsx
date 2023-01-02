import styled from '@emotion/styled';

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  font-weight: 700;
  background-color: var(--background-color);
  transition: background-color 500ms ease-in, border 500ms ease-in;
`;

export const FilterLabel = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--text-color);
  transition: color 500ms ease-in;
`;
