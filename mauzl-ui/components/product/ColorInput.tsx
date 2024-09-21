import React, { useState } from "react";
import Circle from "@uiw/react-color-circle";

const ColorInput = () => {
  const [hex, setHex] = useState("#F44E3B");
  return (
    <Circle
      colors={[
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
      ]}
      color={hex}
      pointProps={{
        style: {
          padding: 12,
          marginRight: 12,
        },
      }}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
};

export default ColorInput;
