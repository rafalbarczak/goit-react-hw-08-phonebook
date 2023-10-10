import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'Redux/selectors';
import { Table } from '@mui/joy';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return filteredContacts.length > 0 ? (
    <Table
      borderAxis="xBetween"
      color="neutral"
      size="lg"
      stickyFooter
      stripe="odd"
      variant="soft"
    >
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map(contact => (
          <tr key={contact.id}>
            <Contact contact={contact} />
          </tr>
        ))}
      </tbody>
    </Table>
  ) : null;
};
