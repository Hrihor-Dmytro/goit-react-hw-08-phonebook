import { ContactForm } from '../components/ContactForm/ContactForm';
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
import { Container } from '../components/ContactEditor/ContactEditor.styled';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <Container>Phone Book</Container>
      <ContactForm />
      <Container>Contacts</Container>
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader />}
    </div>
  );
}
