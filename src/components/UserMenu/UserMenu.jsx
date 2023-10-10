import { Button, Typography } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <Typography level="h2">Welcome, {user.name}!</Typography>
      <Button
        onClick={() => dispatch(logOut())}
        color="danger"
        variant="outlined"
      >
        Log out
      </Button>
    </>
  );
};
