import type { FC } from "react";
import { TextField } from "@mui/material";

const App: FC = () => {
  return (
    <div>
      <h1>Hello</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
};

export default App;
