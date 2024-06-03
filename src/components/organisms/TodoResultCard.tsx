import { type FC } from "react";
import { Stack, Typography } from "@mui/material";

export const TodoResultCard: FC = () => {
  return (
    <Stack direction="row" justifyContent={"space-between"}>
      <Typography>1 items left!</Typography>

      <Stack direction="row" alignItems="center" spacing={4}>
        <Typography>All</Typography>
        <Typography>Active</Typography>
        <Typography>Completed</Typography>
      </Stack>

      <Typography>Clear completed</Typography>
    </Stack>
  );
};
