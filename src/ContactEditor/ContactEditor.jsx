import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/FilterField/Filter';
// import { Container } from './ContactEditor.styled';

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
      <h1>Phone Book</h1>
      <ContactForm />
      {items.length > 0 && (
        <>
          <h1>Contacts</h1>
          <Filter />
        </>
      )}
    </div>
  );
};
