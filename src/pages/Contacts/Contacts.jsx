import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'Redux/contacts/operations';
import { getContacts, getFilteredContacts } from 'Redux/selectors';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { Helmet } from 'react-helmet';
import { CircularProgress, Typography } from '@mui/joy';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        {' '}
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      {filteredContacts.length > 0 ? (
        <>
          <ContactFilter />
          <ContactList />
        </>
      ) : (
        <Typography
          level="title-lg"
          alignItems="center"
          justifyContent="center"
          display="flex"
          height="300px"
        >
          It's time to add some contacts to your phonebook!
        </Typography>
      )}
      <div>
        {isLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '15px',
            }}
          >
            <CircularProgress size="lg" />
          </div>
        )}
      </div>
    </>
  );
};

export default Contacts;
