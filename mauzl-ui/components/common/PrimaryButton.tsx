import { ButtonProps } from "@mui/material";
import Button from "./Button";

interface Props extends ButtonProps {
  text: string;
}

const PrimaryButton = ({ text, ...muiButtonProps }: Props) => {
  return <Button text={text} sx={{ color: "white" }} {...muiButtonProps} />;
};

export default PrimaryButton;
