import { Stack } from "@mui/material";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";

import { useRouter } from "next/navigation";
import TextTypography from "@/components/common/TextTypography";
import TextInput from "@/components/common/TextInput";
import PrimaryButton from "@/components/common/PrimaryButton";
import { Profile, ProfileSchema } from "@/validation/profile.schema";
import SecondaryButton from "../common/SecondaryButton";
import { UserDto } from "@/models";
import { useEffect } from "react";
import { FormPhoneInput } from "./FormPhoneInput";
import { useUsersControllerUpdate } from "@/generated/hooks";
import { extractDayMonthYear, formatBirthDate } from "@/utils/date";

type ProfileEditFormProps = {
  user?: UserDto;
};

const ProfileEditForm = ({ user }: ProfileEditFormProps) => {
  const { push } = useRouter();

  const { mutateAsync: editProfile } = useUsersControllerUpdate(); // Use mutation

  const form = useForm<Profile, ZodValidator>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      birthDay: 0,
      birthMonth: 0,
      birthYear: 0,
      phoneNumber: "",
    },
    validators: {
      onChange: ProfileSchema,
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      const { birthDay, birthMonth, birthYear } = value;
      const birthDate = formatBirthDate(birthDay, birthMonth, birthYear);
      editProfile({ data: { birthDate, ...value } }).then(() => {
        push("/account");
      });
    },
  });

  const handleConfirm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  useEffect(() => {
    if (user) {
      form.setFieldValue("firstName", user.firstName || "");
      form.setFieldValue("lastName", user.lastName || "");
      const birthDate = extractDayMonthYear(user.birthDate);
      form.setFieldValue("birthDay", birthDate.birthDay || 0);
      form.setFieldValue("birthMonth", birthDate.birthMonth || 0);
      form.setFieldValue("birthYear", birthDate.birthYear || 0);
      form.setFieldValue("phoneNumber", user.phoneNumber || "");
    }
  }, [user, form]);

  return (
    <Stack bgcolor="white" px={{ xs: 5, md: 10 }} pb={3} flex={1}>
      <Stack py={3} gap={1}>
        <TextTypography
          text={"Modifier le profil"}
          textTransform="uppercase"
          fontSize={"1.2rem"}
          fontWeight="bold"
        />
      </Stack>
      <Stack gap={2} width="100%">
        <Stack direction="column" gap={1} flexWrap="wrap">
          <TextInput<Profile>
            form={form}
            required
            name="firstName"
            label="Firstname"
          />
          <TextInput<Profile>
            form={form}
            required
            name="lastName"
            label="Lastname"
          />
        </Stack>
        <Stack>
          <TextTypography
            text={"Date de naissance *"}
            variant="h6"
            sx={{
              color: "black",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
          <Stack direction="row" gap={1} flexWrap="wrap">
            <TextInput<Profile>
              form={form}
              name="birthDay"
              placeholder="DD"
              inputType="number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  "& input": {
                    fontSize: "14px", //
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "13px",
                },
                maxWidth: 90,
              }}
            />
            <TextInput<Profile>
              form={form}
              name="birthMonth"
              placeholder="MM"
              inputType="number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  "& input": {
                    fontSize: "14px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "13px",
                },
                maxWidth: 90,
              }}
            />
            <TextInput<Profile>
              form={form}
              name="birthYear"
              placeholder="YYYY"
              inputType="number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  "& input": {
                    fontSize: "14px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "13px",
                },
                maxWidth: 90,
              }}
            />
          </Stack>
        </Stack>

        <FormPhoneInput<Profile>
          form={form}
          name="phoneNumber"
          label="Phone number"
          required
        />

        <Stack
          direction="row"
          gap={1}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-around"
        >
          <SecondaryButton text="Annuler" onClick={() => push("/account")} />
          <PrimaryButton
            type="submit"
            text="Enregistrer"
            onClick={handleConfirm}
            sx={{ minWidth: "270px", bgcolor: "black" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileEditForm;
