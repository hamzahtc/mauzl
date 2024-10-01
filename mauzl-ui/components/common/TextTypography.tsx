import { Typography, TypographyProps } from "@mui/material";
import TranslateMessage from "@/i18n/TranslateMessage";

interface Props extends TypographyProps {
  text: string;
}

const TextTypography = ({
  text,
  variant = "body1",
  ...muiTypographyProps
}: Props) => {
  return (
    <Typography variant={variant} {...muiTypographyProps}>
      <TranslateMessage txKey={text} />
    </Typography>
  );
};

export default TextTypography;
