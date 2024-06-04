export interface ListContentsProps {
	inputValue: string;
	todos: string[];
	value: string;
	// handlerOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	addTodo: (value: string) => void;
	handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface TodoContentsProps {
	text: string;
	isChecked: boolean;
	onCheckChange: (isChecked: boolean) => void;
}

export interface Todo {
	text: string;
	isChecked: boolean;
}
