import TranslateMessage from "@/i18n/TranslateMessage";
import { ButtonProps, Button as MuiButton, Typography } from "@mui/material";

interface Props extends ButtonProps {
  text: string;
}

const Button = ({ text, ...muiButtonProps }: Props) => {
  return (
    <MuiButton variant="contained" {...muiButtonProps}>
      <Typography
        textTransform="none"
        component="div"
        color="white"
        sx={{
          whiteSpace: "nowrap",
          transition: "color 0.5s",
        }}
      >
        <TranslateMessage txKey={text} />
      </Typography>
    </MuiButton>
  );
};

export default Button;
