import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';
import { useEffect } from 'react';
import { addContact } from 'Redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem('contacts');
    if (storedData) {
      const parsedContacts = JSON.parse(storedData);

      parsedContacts.forEach(contact => {
        dispatch(addContact(contact.name, contact.number));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts.items));
    if (contacts.items.length === 0) {
      localStorage.removeItem('contacts');
    }
    // eslint-disable-next-line
  }, []);

  const handleContactsDisplay = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <ul>
      {contacts.items &&
        handleContactsDisplay().map(contact => (
          <li className={css.list__item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
