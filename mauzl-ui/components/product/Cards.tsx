import * as React from "react";
import { Stack } from "@mui/material";
import Card from "./Card";

const Cards = () => {
  return (
    <Stack
      direction="row"
      gap={4}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      px={2}
    >
      {[...Array(3).keys()].map((key) => (
        <Card key={key} />
      ))}
    </Stack>
  );
};

export default Cards;
