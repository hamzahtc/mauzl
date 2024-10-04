import React, { useState } from "react";
import { Box, Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ExpandableRowProps {
  children: React.ReactNode;
}

const ExpandableRow = ({ children }: ExpandableRowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow hover onClick={() => setOpen(!open)}>
        <TableCell padding="checkbox">
          <IconButton
            size="small"
            aria-label="expand row"
            color="primary"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          style={{ paddingBottom: open ? "32px" : "0", paddingTop: "0" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, borderColor: "divider" }}>{children}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ExpandableRow;
