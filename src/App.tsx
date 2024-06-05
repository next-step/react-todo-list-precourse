import Header from './components/Header/Header';
import InputField from './components/Input/InputField';

export default function App() {
  return (
    <>
      <Header title="todos" />
      <InputField
        element="input"
        type="text"
        placeholder="What needs to be done?"
        label="todo-input"
      />
    </>
  );
}
