import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Loader } from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { fetchContacts } from 'Redux/operations';
import { LoginForm } from '../pages/Login/Login';
import { RegisterForm } from '../pages/Register/Register';
import { refreshUser } from 'Redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const ContactList = lazy(() => import('../pages/ContactList/ContactList'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Please wait, user refreshing...</p>
  ) : (
    <div style={{ marginLeft: '10px' }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactList />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

// <h1>Phonebook</h1>
// <ContactForm />
// <h2>Contacts</h2>
// <ContactFilter />
// <ContactList />
// {isLoading && <Loader />}
