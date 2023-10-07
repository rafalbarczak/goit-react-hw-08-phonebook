import { Link } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'components/hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}{' '}
    </header>
  );
};

export default AppBar;
