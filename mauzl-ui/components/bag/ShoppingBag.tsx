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

const ShoppingBag = () => {
  const products = useLiveQuery(() => db.products.toArray());
  const { push } = useRouter();

  if (products?.length === 0) return <></>;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: 4, md: 10 }}
      width="100%"
    >
      <Stack flex="2" gap={2}>
        <TextTypography text={`${products?.length} products in total`} />
        <BagProducts products={products} />
      </Stack>
      <Stack flex="1" gap={2}>
        <TextTypography text="Order summary" fontWeight="bold" />
        <Stack direction="row" justifyContent="space-between">
          <TextTypography text="Products (11)" />
          <TextTypography text="859,80DH" />
        </Stack>
        <Divider />
        <PrimaryButton
          onClick={() => push("/checkout")}
          text={txKeys.services.bag.checkout}
          endIcon={<IoBagCheckOutline />}
        />
      </Stack>
    </Stack>
  );
};

export default ShoppingBag;
