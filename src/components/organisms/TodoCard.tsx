import { type FC, useState } from "react";
import {
  Box,
  Checkbox,
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  id: number;
  label: string;
  onClick: (id: number) => void;
}

export const TodoCard: FC<Props> = ({ id, label, onClick }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
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
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
          }
          label={
            <Typography
              sx={{
                textDecoration: checked ? "line-through" : "none",
                color: checked ? "gray" : "inherit",
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
