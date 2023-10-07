import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
// import { Helmet } from 'react-helmet';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.login.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      {/* <Helmet> */}
      <title>Registration</title>
      {/* </Helmet> */}
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="login">Login</label>
          <input type="text" id="login" name="login" required></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required></input>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};
