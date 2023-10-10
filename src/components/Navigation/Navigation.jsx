import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { House } from '@mui/icons-material';
import { Button, Stack } from '@mui/joy';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Stack spacing={3} direction="row">
        <Stack>
          <Button startDecorator={<House />} component={Link} to="/">
            Home
          </Button>
        </Stack>
        {isLoggedIn && (
          <Stack>
            <Button component={Link} to="/contacts">
              Contacts
            </Button>
          </Stack>
        )}
      </Stack>
    </nav>
  );
};
