import type { FC } from "react";
import { Footer } from "./components/molecules/Footer";
import { Todo } from "./pages/Todo";

const App: FC = () => {
  return (
    <>
      <Todo />
      <Footer />;
    </>
  );
};

export default App;
