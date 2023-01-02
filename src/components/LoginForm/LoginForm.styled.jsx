import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const LoginWrapper = styled.div`
  margin-top: 55px;
`;

export const FormWrapp = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled(Field)`
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 700;
`;

export const Error = styled(ErrorMessage)`
  display: flex;
  width: 300px;
  text-align: center;
  color: red;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--text-color);
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: var(--background-color);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  transition: color 500ms linear, background-color 500ms linear;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid var(--text-color);
  }
`;
