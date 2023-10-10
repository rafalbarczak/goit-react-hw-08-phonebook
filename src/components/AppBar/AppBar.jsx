import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Grid } from '@mui/joy';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Grid
        container
        justifyContent="space-between"
        marginBottom="50px"
        marginTop="5px"
      >
        <Grid>
          <Navigation />
        </Grid>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Grid>
            <AuthNav />
          </Grid>
        )}{' '}
      </Grid>
    </header>
  );
};
