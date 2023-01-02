import {
  SectionList,
  SectionLi,
  ContactTitle,
  ContactTel,
  ContactButton,
} from 'components/ContactsList/ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';
import { selectFilter, selectAllContacts } from '../redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const { contacts, filter } = useSelector(getContacts, getFilter);
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  console.log(filter);

  const getRequiredCard = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    dispatch(deleteContact(contactId));
  };
  const neeedCard = getRequiredCard();
  return (
    <SectionList>
      {neeedCard.map(({ name, number, id }) => {
        return (
          <SectionLi key={id}>
            <ContactTitle> {name} </ContactTitle>
            <ContactTel>{number}</ContactTel>
            <ContactButton type="button" onClick={() => deleteCard(id)}>
              Delete
            </ContactButton>
          </SectionLi>
        );
      })}
    </SectionList>
  );
};
