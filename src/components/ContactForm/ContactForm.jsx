import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { addContact } from 'Redux/contacts/operations';
import { Button, Card, Input } from '@mui/joy';
import { PersonAdd } from '@mui/icons-material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const doesAlreadyExist = contacts.items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (doesAlreadyExist) {
      form.reset();
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Card variant="soft" color="primary">
      <form className={css.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Insert name"
          required
        />
        <Input
          type="tel"
          name="number"
          id="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Insert phone number"
          required
        />
        <Button startDecorator={<PersonAdd />} type="submit">
          Add contact
        </Button>
      </form>
    </Card>
  );
};
