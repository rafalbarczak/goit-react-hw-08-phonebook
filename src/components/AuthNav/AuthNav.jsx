import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/joy';

export const AuthNav = () => {
  return (
    <Grid container spacing={3}>
      <Grid>
        <Button component={Link} to="/register">
          Register
        </Button>
      </Grid>
      <Grid>
        <Button component={Link} to="/login">
          Log in
        </Button>
      </Grid>
    </Grid>
  );
};
