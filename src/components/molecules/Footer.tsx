import { type FC } from "react";
import { Stack, Typography } from "@mui/material";

export const Footer: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography>Double-click to edit a todo</Typography>
      <Typography>Created by the DingX2</Typography>
    </Stack>
  );
};
