import { ContactForm } from '../components/ContactForm/ContactForm';
import { Container } from '../components/App.styled';
import { Filter } from 'components/FilterField/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectLoading,
} from '../components/redux/contacts/selectors';
import { fetchContact } from '../components/redux/contacts/operations';
import { Loader } from '../components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader />}
    </Container>
  );
}
