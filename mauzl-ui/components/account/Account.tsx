"use client";

import React from "react";
import { Divider, Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import { authControllerSignOut } from "@/generated/hooks";
import PrimaryButton from "../common/PrimaryButton";
import { useRouter } from "next/navigation";

const Account = () => {
  const { push } = useRouter();

  const logout = async () => {
    await authControllerSignOut();
    window.location.href = "/";
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap="wrap">
      <Stack gap={2} flex={1}>
        <Stack
          flex={3}
          gap={3}
          bgcolor="#f9f9fb"
          py={2}
          border={1}
          borderColor="black"
        >
          <Stack mx={2}>
            <TextTypography
              text="Informations personnelles"
              fontWeight="bold"
              fontSize={"1.2rem"}
              textTransform="uppercase"
            />
            <TextTypography text="Tu peux modifier tes informations ci-dessous quand tu le souhaites." />
          </Stack>
          <Divider />
          <Stack gap={2}>
            <Stack mx={2} gap={0.5}>
              <Stack direction="row" gap={1} justifyContent="space-between">
                <TextTypography
                  text="INFORMATIONS"
                  fontWeight="bold"
                  fontSize={"1.2rem"}
                  textTransform="uppercase"
                />
                <TextTypography
                  text="Modifier"
                  fontWeight="bold"
                  textTransform="uppercase"
                  onClick={() => push("profile-edit")}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              <TextTypography text="Hamza Hatoch" />
              <TextTypography text="1998-11-11" />
              <TextTypography text="hamzahatoch04@gmail.com" />
            </Stack>
            <Stack bgcolor="#eee" mx={2} p={2} gap={1}>
              <TextTypography text="Ajoute un numéro de mobile pour recevoir les actus" />
              <TextTypography
                text="Ajoute un numéro de mobile"
                onClick={() => push("profile-edit")}
                fontWeight="bold"
                fontSize={"0.8rem"}
                textTransform="uppercase"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          flex={3}
          gap={2}
          bgcolor="#f9f9fb"
          py={2}
          border={1}
          borderColor="black"
        >
          <Stack mx={2}>
            <TextTypography
              text="Carnet d’adresses"
              fontWeight="bold"
              fontSize={"1.2rem"}
              textTransform="uppercase"
            />
          </Stack>
          <Divider />
          <Stack alignItems="center">
            <TextTypography
              text="Ajouter nouveau"
              fontWeight="bold"
              textTransform="uppercase"
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack flex={1} gap={2}>
        <Stack bgcolor="#f9f9fb" border={1} borderColor="black">
          <TextTypography text="Wishlist" fontWeight="bold" p={2} />
          <Divider />
          <TextTypography text="Cette liste est vide." p={2} />
        </Stack>
        <Stack alignItems="flex-start">
          <PrimaryButton
            text="Se déconnecter"
            size="large"
            color="error"
            onClick={() => logout()}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Account;
