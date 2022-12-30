import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateErrorLogIn } from '../redux/auth/authSlice';
import { selectLogInError } from '../redux/auth/selectors';
import { logIn } from '../redux/auth/operations';
import {
  FormWrapp,
  Input,
  Error,
  Label,
  SubmitButton,
  LoginWrapper,
} from 'components/LoginForm/LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().email('').required(),
  password: yup
    .string()
    .min(4)
    .max(12)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Password is correct'
    )
    .required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectLogInError);

  useEffect(() => {
    dispatch(updateErrorLogIn(error));
    return () => {
      dispatch(updateErrorLogIn(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    if (error !== null) {
      resetForm();
    }
  };

  return (
    <LoginWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormWrapp autoComplete="off">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Please, enter your Email"
            required
          />
          <Error name="email" component="div" />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Please, enter your Password"
            required
          />
          <Error name="password" component="div" />
          <SubmitButton type="submit">Log in</SubmitButton>
        </FormWrapp>
      </Formik>
    </LoginWrapper>
  );
};
