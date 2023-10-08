import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
// import { Helmet } from 'react-helmet';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <>
        {/* <Helmet> */}
        {/* <title>Log in</title> */}
        {/* </Helmet> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required></input>
          <button type="submit">Log in</button>
        </form>
      </>
    </div>
  );
};

export default Login;
