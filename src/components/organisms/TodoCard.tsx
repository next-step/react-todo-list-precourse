import { type FC, useState, useRef, useEffect } from "react";
import { type TodoItem } from "../types/todoItem";
import {
  Box,
  Checkbox,
  Stack,
  Typography,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface Props extends TodoItem {
  onToggleCompleted: (id: number) => void;
  onClick: (id: number) => void;
  onUpdateLabel: (id: number, newLabel: string) => void;
}

export const TodoCard: FC<Props> = ({
  id,
  label,
  completed,
  onToggleCompleted,
  onClick,
  onUpdateLabel,
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedLabel, setEditedLabel] = useState<string>(label);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLabel(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (editedLabel.trim() !== "") {
      onUpdateLabel(id, editedLabel);
    } else {
      setEditedLabel(label);
    }
  };

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

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
            isEditing ? (
              <TextField
                value={editedLabel}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyPress={handleInputKeyPress}
                inputRef={inputRef}
                size="small"
                variant="outlined"
              />
            ) : (
              <Typography
                onDoubleClick={handleDoubleClick}
                sx={{
                  textDecoration: completed ? "line-through" : "none",
                  color: completed ? "gray" : "inherit",
                }}
              >
                {label}
              </Typography>
            )
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
