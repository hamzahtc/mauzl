import { Stack } from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TextTypography from "../common/TextTypography";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import MoneyIcon from "@mui/icons-material/Money";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import RestoreIcon from "@mui/icons-material/Restore";

const DeliverySection = () => {
  return (
    <Stack direction="column" gap={2} flexWrap="wrap" pt={6}>
      <Stack direction="row" gap={2}>
        <LocalShippingIcon fontSize="small" />
        <TextTypography
          text={"Livraison offerte à partir de 600 MAD"}
          fontSize={"0.8rem"}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <AvTimerIcon fontSize="small" />
        <TextTypography text={"1 à 3 jours ouvrables."} fontSize={"0.8rem"} />
      </Stack>
      <Stack direction="row" gap={2}>
        <MoneyIcon fontSize="small" />
        <TextTypography
          text={"Paiement à la livraison disponible"}
          fontSize={"0.8rem"}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <VerifiedUserIcon fontSize="small" />
        <TextTypography text={"Transactions sécurisées"} fontSize={"0.8rem"} />
      </Stack>
      <Stack direction="row" gap={2}>
        <RestoreIcon fontSize="small" />
        <TextTypography
          text={"Retour sans tracas sous 30 jours."}
          fontSize={"0.8rem"}
        />
      </Stack>
    </Stack>
  );
};

export default DeliverySection;
