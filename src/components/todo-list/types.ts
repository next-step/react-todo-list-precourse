export interface TodoContentsProps {
	text: string;
	onCheckChange: (isChecked: boolean) => void;
	isChecked: boolean;
	onDelete: () => void;
}
