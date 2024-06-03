import { type FC } from "react";
import {
  Box,
  Checkbox,
  Stack,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export const TodoCard: FC = () => {
  return (
    <Box>
      <Stack direction="column">
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="밥먹기" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="밥먹기" />
        </FormGroup>
      </Stack>
    </Box>
  );
};
