import { Divider, IconButton, Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import TextInput from "../common/TextInput";
import { Signup, SignupSchema } from "@/validation/signup.schema";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";
import PrimaryButton from "../common/PrimaryButton";
import { theme } from "@/styles/stylesheet";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthControllerSignup } from "@/generated/hooks";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const SignupForm = () => {
  const { push } = useRouter();

  const { mutateAsync: signup } = useAuthControllerSignup();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<Signup, ZodValidator>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validators: {
      onChange: SignupSchema,
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) =>
      signup({ data: value }).then(() => {
        push("/signin");
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
        <TextTypography
          text={"Join for success"}
          variant="h4"
          fontWeight="bold"
        />
        <TextTypography
          text={
            "Are you ready to take the next step towards a successfull future"
          }
          fontSize="0.8rem"
        />
      </Stack>
      <Stack gap={2} width="100%">
        <Stack direction="row" gap={1} flexWrap="wrap" maxWidth="230px">
          <TextInput<Signup>
            form={form}
            name="firstName"
            label="Firstname"
            placeholder="Enter your firstname"
          />
          <TextInput<Signup>
            form={form}
            name="lastName"
            label="Lastname"
            placeholder="Enter your lastname"
          />
        </Stack>
        <TextInput<Signup>
          form={form}
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
        {/* <PrimaryButton
          text="Picture"
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<MdFileUpload size="16px" />}
          sx={{ minWidth: "270px", bgcolor: "black" }}
        >
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </PrimaryButton> */}

        <TextInput<Signup>
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
          text="Sign up"
          onClick={handleConfirm}
          sx={{ minWidth: "270px", bgcolor: "black" }}
        />
      </Stack>
      <Divider
        sx={{
          width: "100%",
          my: 3,
          color: "gray",
          "&::before, &::after": {
            borderColor: theme.palette.grey[400],
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
          text="Sign up with Google"
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
          <TextTypography text={"Already have an account?"} fontSize="0.8rem" />
          <TextTypography
            text={"Sign in"}
            fontSize="0.8rem"
            fontWeight="bold"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => push("/signin")}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignupForm;
