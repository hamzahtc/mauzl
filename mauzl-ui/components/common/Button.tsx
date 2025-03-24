import { ButtonProps, Button as MuiButton } from "@mui/material";
import TextTypography from "./TextTypography";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  text: string;
  textColor?: string;
  children?: ReactNode;
}

const Button = ({
  text,
  children,
  textColor = "white",
  ...muiButtonProps
}: Props) => {
  return (
    <MuiButton variant="contained" disableElevation {...muiButtonProps}>
      <TextTypography
        text={text}
        textTransform="none"
        sx={{
          whiteSpace: "nowrap",
          transition: "color 0.5s",
          boxShadow: "none",
          color: textColor,
          fontSize: "0.8rem",
        }}
      />
      {children}
    </MuiButton>
  );
};

export default Button;
