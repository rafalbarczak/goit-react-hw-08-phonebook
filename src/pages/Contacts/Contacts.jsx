import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'Redux/operations';
import { Loader } from 'components/Loader/Loader';
import { getContacts } from 'Redux/selectors';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        {' '}
        <title>Contacts</title>
      </Helmet> */}
      <ContactForm />
      <ContactFilter />
      <div>{isLoading && <Loader />}</div> <ContactList />
    </>
  );
};

export default Contacts;
