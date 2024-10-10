import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import QuantityInput from "./QuantityInput";
import txKeys from "@/i18n/translations";
import SizeInput from "./SizeInput";
import { ProductDto } from "@/models";
import { db } from "@/utils/db";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import TextTypography from "../common/TextTypography";
import { theme } from "@/styles/stylesheet";
import { SizeType } from "@/common/contants";

interface ProductShopDetailsProps {
  product?: ProductDto;
}

const ProductShopDetails = ({ product }: ProductShopDetailsProps) => {
  const [size, setSize] = useState<SizeType>("m");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <></>;

  const { name, description, price } = product || {};

  const addProductToBag = async () =>
    await db.products.add({ product, size, quantity, productId: product.id });

  const handleSizeInput = (size: SizeType) => {
    setSize(size);
  };

  const handleQuantityInput = (quantity: number) => {
    setQuantity(quantity);
  };

  return (
    <Stack gap={4}>
      <TextTypography
        text={name}
        variant="h4"
        textTransform="uppercase"
        fontWeight="bold"
      />
      <TextTypography text={description} variant="body2" lineHeight={2} />
      {/* <Stack gap={2}>
        <TextTypography text="Color: WHITE" fontWeight="bold" />
        <ColorInput />
      </Stack> */}
      <Stack gap={2}>
        <SizeInput size={size} handleSizeInput={handleSizeInput} />
      </Stack>
      <Stack direction="row" alignItems="end" gap={2}>
        <TextTypography
          text={`${price} MAD`}
          variant="h5"
          fontWeight="bold"
          color="info"
        />
        <TextTypography
          text={`${price - 100} MAD`}
          sx={{ textDecoration: "line-through" }}
        />
      </Stack>
      <Stack
        direction={{ sx: "column", md: "row" }}
        gap={4}
        justifyContent="start"
        alignItems="center"
      >
        <Box flex={1}>
          <QuantityInput
            quantity={quantity}
            handleQuantityInput={handleQuantityInput}
          />
        </Box>
        <Stack direction={{ sx: "column", md: "row" }} gap={2} flex={3}>
          <SecondaryButton
            onClick={() => undefined}
            text={txKeys.services.shop.wishlist}
            size="small"
            endIcon={<FaRegHeart color={theme.palette.primary.main} />}
            fullWidth
          />
          <PrimaryButton
            sx={{
              px: 3,
            }}
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
