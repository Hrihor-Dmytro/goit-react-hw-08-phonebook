import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from '../redux/auth/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormRegisterWrapp,
  InputRegister,
  ErrorRegister,
  LabelRegister,
  SubmitButtonRegister,
  Fromwrapper,
} from 'components/RegisterForm/RegisterForm.styled';
import { selectRegisterError } from '../redux/auth/selectors';
import { updateErrorRegister } from '../redux/auth/authSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(''),
  password: yup.string().min(6).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectRegisterError);

  useEffect(() => {
    dispatch(updateErrorRegister(error));
    return () => {
      dispatch(updateErrorRegister(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));

    if (error !== null) {
      resetForm();
    }
  };

  return (
    <Fromwrapper>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormRegisterWrapp autoComplete="off">
          <LabelRegister htmlFor="email">E-mail</LabelRegister>
          <InputRegister
            type="email"
            name="email"
            placeholder="Please, enter your E-mail"
            required
          />
          <ErrorRegister name="email" component="div" />

          <LabelRegister htmlFor="password">Password</LabelRegister>
          <InputRegister
            type="password"
            name="password"
            placeholder="Please, enter your Password"
            required
          />
          <ErrorRegister name="password" component="div" />

          <LabelRegister htmlFor="name">Name</LabelRegister>
          <InputRegister
            type="name"
            name="name"
            placeholder="Please, enter your Name"
            required
          />
          <ErrorRegister name="name" component="div" />
          <SubmitButtonRegister type="submit">Register</SubmitButtonRegister>
        </FormRegisterWrapp>
      </Formik>
    </Fromwrapper>
  );
};
