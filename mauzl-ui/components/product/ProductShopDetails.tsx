import { Box, Stack } from "@mui/material";
import React from "react";
import QuantityInput from "./QuantityInput";
import txKeys from "@/i18n/translations";
import ColorInput from "./ColorInput";
import SizeInput from "./SizeInput";
import { ProductDto } from "@/models";
import { db } from "@/utils/db";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import TextTypography from "../common/TextTypography";
import { theme } from "@/styles/stylesheet";

interface ProductShopDetailsProps {
  product?: ProductDto;
}

const ProductShopDetails = ({ product }: ProductShopDetailsProps) => {
  if (!product) return <></>;

  const { name, description, price } = product || {};

  const addProductToBag = async () => await db.products.add(product);

  return (
    <Stack gap={4}>
      <TextTypography
        text={name}
        variant="h4"
        textTransform="uppercase"
        fontWeight="bold"
      />
      <TextTypography text={description} variant="body2" lineHeight={2} />
      <Stack gap={2}>
        <TextTypography text="Color: WHITE" fontWeight="bold" />
        <ColorInput />
      </Stack>
      <Stack gap={2}>
        <TextTypography text="Size: SMALL" fontWeight="bold" />
        <SizeInput />
      </Stack>
      <Stack direction="row" alignItems="end" gap={2}>
        <TextTypography
          text={`${price} MAD`}
          variant="h5"
          fontWeight="bold"
          color="info"
        />
        <TextTypography text="$34.00" sx={{ textDecoration: "line-through" }} />
      </Stack>
      <Stack direction="row" gap={4} justifyContent="start" alignItems="center">
        <Box flex={1}>
          <QuantityInput />
        </Box>
        <Stack direction="row" gap={2} flex={3}>
          <SecondaryButton
            onClick={() => undefined}
            text={txKeys.services.shop.wishlist}
            size="small"
            endIcon={<FaRegHeart color={theme.palette.primary.main} />}
            fullWidth
          />
          <PrimaryButton
            onClick={addProductToBag}
            text={txKeys.services.shop.addToBag}
            size="small"
            endIcon={<FaBagShopping />}
            fullWidth
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductShopDetails;
