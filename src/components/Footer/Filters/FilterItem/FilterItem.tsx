import styles from './FilterItem.module.css';

interface FilterItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const FilterItem = ({ label, selected, onClick }: FilterItemProps) => {
  return (
    <li onClick={onClick} className={`${styles['filter-item']} ${selected && styles.selected}`}>
      {label}
    </li>
  );
};

export default FilterItem;
