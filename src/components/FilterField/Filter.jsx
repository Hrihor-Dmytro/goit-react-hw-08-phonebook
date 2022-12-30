import {
  FilterWrap,
  FilterInput,
  FilterLabel,
} from 'components/FilterField/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/contacts/selectors';
import { filterChange } from '../redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  console.log(filter);

  const onFilterChange = e => {
    dispatch(filterChange(e.currentTarget.value));
  };
  return (
    <FilterWrap>
      <FilterLabel htmlFor="text">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterWrap>
  );
};
