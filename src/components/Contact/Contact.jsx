import { deleteContact } from 'Redux/contacts/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar, Button } from '@mui/joy';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return contact ? (
    <>
      <td>
        <Avatar>{contact.name.charAt(0)}</Avatar>
      </td>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td>
        <Button name="delete" onClick={handleDelete} color="danger">
          Delete
        </Button>
      </td>
    </>
  ) : null;
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
