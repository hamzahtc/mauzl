import { Divider, IconButton, Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import TextInput from "../common/TextInput";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";
import PrimaryButton from "../common/PrimaryButton";
import { theme } from "@/styles/stylesheet";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Signin, SigninSchema } from "@/validation/signin.schema";
import {
  getUsersControllerFindMeQueryKey,
  useAuthControllerLogin,
} from "@/generated/hooks";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const SigninForm = () => {
  const { push } = useRouter();

  const { mutateAsync: signin } = useAuthControllerLogin();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<Signin, ZodValidator>({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: SigninSchema,
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) =>
      signin({ data: value }).then(() => {
        QueryClientInstance.refetchQueries({
          queryKey: getUsersControllerFindMeQueryKey(),
          exact: true,
        });
        push("/");
      }),
  });

  const handleConfirm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <Stack bgcolor="white" px={10} pb={5} alignItems="center" maxWidth="700px">
      <Stack py={5} gap={1} alignItems="center">
        <TextTypography text={"Welcome back"} variant="h4" fontWeight="bold" />
        <TextTypography
          text={
            "Are you ready to take the next step towards a successfull future"
          }
          fontSize="0.8rem"
        />
      </Stack>
      <Stack gap={2} width="100%">
        <TextInput<Signin>
          form={form}
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
        <TextInput<Signin>
          form={form}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          endIcon={
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? (
                <FaEye size={"16px"} />
              ) : (
                <FaEyeSlash size={"16px"} />
              )}
            </IconButton>
          }
        />
        <PrimaryButton
          type="submit"
          text="Sign in"
          onClick={handleConfirm}
          sx={{ minWidth: "270px", bgcolor: "black" }}
        />
      </Stack>
      <Divider
        sx={{
          width: "100%",
          my: 3, // vertical margin
          color: "gray",
          "&::before, &::after": {
            borderColor: theme.palette.grey[400], // or just "gray"
          },
          fontSize: "0.8rem",
        }}
      >
        OR
      </Divider>
      <Stack width="100%" gap={2}>
        <PrimaryButton
          type="submit"
          startIcon={<FcGoogle color={theme.palette.secondary.main} />}
          text="Sign in with Google"
          href="/api/auth/google/callback"
          textColor="black"
          sx={{
            minWidth: "270px",
            bgcolor: "white",
            color: "black",
            border: "1px solid",
          }}
        />
        <Stack justifyContent="center" direction="row" gap={0.5}>
          <TextTypography text={"Don't have an account?"} fontSize="0.8rem" />
          <TextTypography
            text={"Sign up for free"}
            fontSize="0.8rem"
            fontWeight="bold"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => push("/signup")}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SigninForm;
