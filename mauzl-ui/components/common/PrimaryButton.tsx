import { ButtonProps } from "@mui/material";
import Button from "./Button";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  text: string;
  textColor?: string;
  children?: ReactNode;
}

const PrimaryButton = ({
  children,
  text,
  textColor,
  ...muiButtonProps
}: Props) => {
  return (
    <Button
      text={text}
      textColor={textColor}
      sx={{ color: "white" }}
      {...muiButtonProps}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
