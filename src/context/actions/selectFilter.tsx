import { FilterType } from '../TodoContext';

export const selectFilter = (
  filter: FilterType,
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>,
) => {
  setFilter(filter);
};
