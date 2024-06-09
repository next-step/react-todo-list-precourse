export interface InputSectionProps {
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	addTodo: (text: string) => void;
	handleToggleAll: () => void;
}
