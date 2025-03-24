import { Typography, TypographyProps } from "@mui/material";
import TranslateMessage from "@/i18n/TranslateMessage";

interface Props extends TypographyProps {
  text: string;
}

const TextTypography = ({
  text,
  variant = "body1",
  fontSize = "0.9rem",
  ...muiTypographyProps
}: Props) => {
  return (
    <Typography variant={variant} fontSize={fontSize} {...muiTypographyProps}>
      <TranslateMessage txKey={text} />
    </Typography>
  );
};

export default TextTypography;
