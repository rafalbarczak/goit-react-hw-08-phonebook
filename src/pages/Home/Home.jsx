// import { Helmet } from 'react-helmet';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.wrapper}>
      {/* <Helmet> */}
      {/* <title>Phonebook</title> */}
      {/* </Helmet> */}
      <h1 className={css.title}>Welcome to Phonebook!</h1>{' '}
      <p className={css.text}>Log in or create a new account</p>
    </div>
  );
};

export default Home;
