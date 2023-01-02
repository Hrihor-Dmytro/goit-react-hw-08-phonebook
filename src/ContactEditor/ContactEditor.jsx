import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/FilterField/Filter';
import { Container } from './ContactEditor.styled';

import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactEditor = () => {
  const items = useSelector(selectAllContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Container>Phone Book</Container>
      <ContactForm />
      {items.length > 0 && (
        <>
          <Container>Contacts</Container>
          <Filter />
        </>
      )}
    </div>
  );
};
