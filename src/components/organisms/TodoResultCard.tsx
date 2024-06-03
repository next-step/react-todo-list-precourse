import { type FC } from "react";
import { Stack, Typography, Button } from "@mui/material";

interface Props {
  leftItem: number;
  activeFilter: string;
  totalItems: number;
  onFilterChange: (filter: string) => void;
}

export const TodoResultCard: FC<Props> = ({
  leftItem,
  activeFilter,
  totalItems,
  onFilterChange,
}) => {
  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
  };

  return (
    totalItems > 0 && (
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography>{leftItem} items left!</Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          {["All", "Active", "Completed"].map((filter) => (
            <Button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              variant="text"
              sx={{
                border: activeFilter === filter ? "1px solid black" : "none",
                borderRadius: 0,
                padding: "2px 4px",
                minWidth: "auto",
              }}
            >
              {filter}
            </Button>
          ))}
        </Stack>

        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Clear completed
        </Typography>
      </Stack>
    )
  );
};
