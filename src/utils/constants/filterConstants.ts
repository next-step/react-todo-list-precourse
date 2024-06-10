import { FilterType } from '../../context/types/TodoTypes';

export const FILTERS: Array<{ label: string; value: FilterType }> = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];