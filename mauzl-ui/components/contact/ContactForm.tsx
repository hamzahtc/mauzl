import * as React from "react";
import { Stack } from "@mui/material";
import { Contact, ContactSchema } from "@/validation/contact.schema";
import TextInput from "../common/TextInput";
import { zodValidator, ZodValidator } from "@tanstack/zod-form-adapter";
import { useForm } from "@tanstack/react-form";
import PrimaryButton from "../common/PrimaryButton";
import TextArea from "../common/TextArea";
import { useContactControllerCreate } from "@/generated/hooks";

const ContactForm: React.FC = () => {
  const { mutateAsync: createContact } = useContactControllerCreate();

  const form = useForm<Contact, ZodValidator>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    validators: {
      onChange: ContactSchema,
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => createContact({ data: value }),
  });

  const handleConfirm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <Stack gap={2} justifyContent="center" width="100%" p={2}>
      <Stack gap={2} direction={{ xs: "column", lg: "row" }}>
        <TextInput<Contact>
          form={form}
          name="firstName"
          label="First name"
          placeholder="Enter your first name"
          required
        />
        <TextInput<Contact>
          form={form}
          name="lastName"
          label="Last name"
          placeholder="Enter your last name"
          required
        />
      </Stack>
      <Stack gap={2} direction={{ xs: "column", lg: "row" }}>
        <TextInput<Contact>
          form={form}
          name="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
        <TextInput<Contact>
          form={form}
          name="phoneNumber"
          label="Phone number"
          placeholder="Enter your phone number"
          required
        />
      </Stack>
      <TextInput<Contact>
        form={form}
        name="subject"
        label="Subject"
        placeholder="Subject"
        required
      />
      <TextArea<Contact>
        form={form}
        name="message"
        label="Message"
        placeholder="Write your message.."
        minRows={4}
        required
      />
      <PrimaryButton
        type="submit"
        text="Send Message"
        onClick={handleConfirm}
        sx={{ minWidth: "270px", bgcolor: "#018849" }}
      />
    </Stack>
  );
};

export default ContactForm;
