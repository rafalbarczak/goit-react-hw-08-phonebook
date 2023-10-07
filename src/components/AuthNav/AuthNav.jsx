import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <button component={Link} to="/register" type="button">
        <Link to="/register">Register</Link>
      </button>{' '}
      <button type="button">
        <Link to="/login">Log In</Link>
      </button>
    </div>
  );
};
