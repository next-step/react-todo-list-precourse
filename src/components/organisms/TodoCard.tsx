import { type FC, useState } from "react";
import { type TodoItem } from "../types/todoItem";
import {
  Box,
  Checkbox,
  Stack,
  Typography,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface Props extends TodoItem {
  onToggleCompleted: (id: number) => void;
  onClick: (id: number) => void;
}

export const TodoCard: FC<Props> = ({
  id,
  label,
  completed,
  onToggleCompleted,
  onClick,
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
          }
          label={
            <Typography
              sx={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "gray" : "inherit",
              }}
            >
              {label}
            </Typography>
          }
        />
        {hoveredId === id && (
          <IconButton onClick={() => onClick(id)} aria-label="delete">
            <ClearIcon />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};
