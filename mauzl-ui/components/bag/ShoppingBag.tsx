"use client";

import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Stack } from "@mui/material";
import { db } from "@/utils/db";
import TextTypography from "../common/TextTypography";
import Divider from "@mui/material/Divider";
import PrimaryButton from "../common/PrimaryButton";
import txKeys from "@/i18n/translations";
import { IoBagCheckOutline } from "react-icons/io5";
import BagProducts from "./BagProducts";
import { useRouter } from "next/navigation";
import { HelveticaNow } from "@/styles/stylesheet";
import { CiDeliveryTruck } from "react-icons/ci";

const ShoppingBag = () => {
  const orderItems = useLiveQuery(() => db.products.toArray());
  const { push } = useRouter();

  if (orderItems?.length === 0) return <></>;

  const products = orderItems?.map((order) => order.product);
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: 4, md: 1 }}
      width="100%"
    >
      <Stack flex={2} gap={1}>
        <Stack
          bgcolor="#f9f9fb"
          p={2}
          direction="row"
          justifyContent="space-between"
        >
          <TextTypography text="MON PANIER" fontWeight="bold" />
          <TextTypography text={`${orderItems?.length} products in total`} />
        </Stack>
        <BagProducts orderItems={orderItems} />
        <Stack
          bgcolor="#f9f9fb"
          p={2}
          direction="row"
          justifyContent="end"
          gap={4}
        >
          <TextTypography
            textTransform="uppercase"
            fontWeight="bold"
            text={`sous-total`}
          />
          <TextTypography
            textTransform="uppercase"
            fontWeight="bold"
            text={`${orderItems?.reduce((totalPrice, order) => {
              return totalPrice + order.quantity * order.product.price;
            }, 0)} MAD`}
            fontFamily={HelveticaNow.style.fontFamily}
          />
        </Stack>
        <Stack
          bgcolor="#f9f9fb"
          p={2}
          direction="row"
          alignItems="center"
          gap={4}
        >
          <CiDeliveryTruck size={50} />
          <TextTypography
            textTransform="uppercase"
            fontWeight="bold"
            text="Free standard delivery over 599 MAD"
            fontFamily={HelveticaNow.style.fontFamily}
          />
        </Stack>
      </Stack>
      <Stack flex="1" gap={2} bgcolor="#f9f9fb" p={2} maxHeight="180px">
        <TextTypography
          text="Order summary"
          fontWeight="bold"
          textTransform="uppercase"
        />
        <Stack direction="row" justifyContent="space-between">
          <TextTypography text={`Products (${products?.length})`} />
          <TextTypography
            text="859,80 MAD"
            fontFamily={HelveticaNow.style.fontFamily}
          />
        </Stack>
        <Divider />
        <PrimaryButton
          onClick={() => push("/checkout")}
          text={txKeys.services.bag.checkout}
          endIcon={<IoBagCheckOutline />}
          sx={{
            bgcolor: "#018849",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default ShoppingBag;
