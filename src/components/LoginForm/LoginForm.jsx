import { logIn } from 'Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, Input, Stack } from '@mui/joy';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack marginTop="30px" spacing={3}>
        <Input
          type="text"
          name="email"
          placeholder="Type in your email..."
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Type in your password..."
          required
        />
        <Button type="submit">Log in</Button>
      </Stack>
    </form>
  );
};
