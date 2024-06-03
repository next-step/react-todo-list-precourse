import { type FC, useState } from "react";
import { Stack, Typography, Button } from "@mui/material";

interface Props {
  leftItem: number;
}

export const TodoResultCard: FC<Props> = ({ leftItem }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    leftItem && (
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
