import TranslateMessage from "@/i18n/TranslateMessage";
import { ButtonProps, Button as MuiButton, Typography } from "@mui/material";

interface Props extends ButtonProps {
  text: string;
  textColor?: string;
}

const Button = ({ text, textColor = "white", ...muiButtonProps }: Props) => {
  return (
    <MuiButton variant="contained" {...muiButtonProps}>
      <Typography
        textTransform="none"
        component="div"
        sx={{
          whiteSpace: "nowrap",
          transition: "color 0.5s",
          color: textColor,
        }}
      >
        <TranslateMessage txKey={text} />
      </Typography>
    </MuiButton>
  );
};

export default Button;
