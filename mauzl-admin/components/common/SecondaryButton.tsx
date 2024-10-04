import { ButtonProps } from "@mui/material";
import Button from "./Button";
import { theme } from "@/styles/stylesheet";

interface Props extends ButtonProps {
  text: string;
}

const SecondaryButton = ({ text, ...muiButtonProps }: Props) => {
  return (
    <Button
      text={text}
      textColor={theme.typography.body2.color}
      sx={{
        bgcolor: "#f9f9fb",
        "&:hover": {
          bgcolor: "#eeeeF2",
        },
      }}
      {...muiButtonProps}
    />
  );
};

export default SecondaryButton;
