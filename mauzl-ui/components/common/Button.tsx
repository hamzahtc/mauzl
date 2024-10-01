import { ButtonProps, Button as MuiButton } from "@mui/material";
import TextTypography from "./TextTypography";

interface Props extends ButtonProps {
  text: string;
  textColor?: string;
}

const Button = ({ text, textColor = "white", ...muiButtonProps }: Props) => {
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
        }}
      />
    </MuiButton>
  );
};

export default Button;
