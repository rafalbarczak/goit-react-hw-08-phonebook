import { Helmet } from 'react-helmet';
import css from './Home.module.css';
import { Typography } from '@mui/joy';
import { useAuth } from 'hooks/useAuth';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Typography textAlign="center" level="h1">
        Welcome to Phonebook
      </Typography>
      {!isLoggedIn && (
        <Typography textAlign="center" level="title-lg">
          Log in or create a new account
        </Typography>
      )}
    </div>
  );
};

export default Home;
