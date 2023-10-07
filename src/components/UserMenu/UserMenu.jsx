import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.name}!</p>{' '}
      <button
        onClick={() => dispatch(logOut())}
        type="button"
        style={{
          display: 'block',
          margin: '0 auto',
          fontFamily: 'system-ui, sans-serif',
          fontWeight: '600',
        }}
      >
        Logout
      </button>{' '}
    </div>
  );
};
