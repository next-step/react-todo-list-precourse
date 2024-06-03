import { type FC } from "react";
import { Stack } from "@mui/material";

export const Footer: FC = () => {
  return (
    <Stack direction="column">
      <text>Double-click to edit a todo</text>
      <text>Created by the DingX2</text>
    </Stack>
  );
};
