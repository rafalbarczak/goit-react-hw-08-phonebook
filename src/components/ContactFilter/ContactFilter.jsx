import { getFilter } from 'Redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/actions';
import { Card, Input, Typography } from '@mui/joy';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Card variant="plain" maxWidth="50px">
      <label htmlFor="filter">
        <Typography level="title-md">Find contacts by name</Typography>
      </label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Card>
  );
};
