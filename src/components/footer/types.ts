export interface FooterProps {
	number: number;
	onFilterChange: (filter: string) => void;
	onClearCompleted: () => void;
}

export interface Todo {
	text: string;
	isChecked: boolean;
}

export interface TodoContentsProps {
	text: string;
	isChecked: boolean;
	onCheckChange: (isChecked: boolean) => void;
}
