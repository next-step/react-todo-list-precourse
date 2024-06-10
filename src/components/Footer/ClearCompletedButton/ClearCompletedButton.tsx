import styles from './ClearCompletedButton.module.css';

interface ClearCompletedButtonProps {
  clearCompleted: (() => void) | undefined;
}

const ClearCompletedButton = ({ clearCompleted }: ClearCompletedButtonProps) => {
  return (
    <button
      type="button"
      className={styles['clear-completed']}
      onClick={() => clearCompleted && clearCompleted()}
    >
      Clear completed
    </button>
  );
};

export default ClearCompletedButton;
