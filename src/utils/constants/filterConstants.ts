import { FilterType } from '../../types/todoTypes';

export const FILTERS: Array<{ label: string; value: FilterType }> = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];
