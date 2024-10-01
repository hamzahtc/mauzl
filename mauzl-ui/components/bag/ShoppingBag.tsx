"use client";

import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Box, Stack } from "@mui/material";
import { db } from "@/utils/db";
import Image from "next/image";
import TextTypography from "../common/TextTypography";
import Divider from "@mui/material/Divider";
import SecondaryButton from "../common/SecondaryButton";
import PrimaryButton from "../common/PrimaryButton";

const ShoppingBag = () => {
  const products = useLiveQuery(() => db.products.toArray());

  if (products?.length === 0) return <></>;

  return (
    <Stack direction="row" gap={25}>
      <Stack flex="2" gap={2}>
        <TextTypography text={`${products?.length} products in total`} />
        <Stack gap={4}>
          {products?.map((product, index) => (
            <Box
              key={product.id}
              sx={{ "&:hover": { color: "black", cursor: "pointer" } }}
            >
              <Stack direction="row" gap={2} pb={5}>
                <Image
                  alt=""
                  src={product.images[0]}
                  width={120}
                  height={120}
                />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems=""
                  width="100%"
                >
                  <Stack justifyContent="space-between">
                    <Stack>
                      <TextTypography
                        text={product.name}
                        fontWeight="bold"
                        variant="h6"
                      />
                      <TextTypography text={product.category.name} />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <SecondaryButton
                        text="Remove"
                        onClick={() => db.products.delete(product.id)}
                      />
                      <PrimaryButton text="Move to favorites" />
                    </Stack>
                  </Stack>
                  <TextTypography text={`${product.price} MAD`} />
                </Stack>
              </Stack>
              {index < products.length - 1 && <Divider />}
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack flex="1" gap={2}>
        <TextTypography text="Order summary" fontWeight="bold" />
        <Stack direction="row" justifyContent="space-between">
          <TextTypography text="Products (11)" />
          <TextTypography text="859,80DH" />
        </Stack>
        <Divider />
      </Stack>
    </Stack>
  );
};

export default ShoppingBag;
