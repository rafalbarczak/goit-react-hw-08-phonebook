import { register } from 'Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Stack, Input, Button } from '@mui/joy';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Input
          type="email"
          name="email"
          placeholder="Type in your email..."
          title="Email must contain @ sign, for example xyz@gmail.com"
          required
        />
        <Input
          name="name"
          placeholder="Type in your username..."
          title="name may contain only letters and digits"
          required
        />
        <Input
          type="password"
          name="password"
          title="Password may contain letters, digits and special signs"
          required
          placeholder="Type in your password..."
        />
        <Button type="submit">Register</Button>
      </Stack>
    </form>
  );
};
