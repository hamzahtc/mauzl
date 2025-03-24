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
import TextTypography from "../common/TextTypography";
import { theme } from "@/styles/stylesheet";
import { SizeType } from "@/common/contants";
import DeliverySection from "./DeliverySection";

interface ProductShopDetailsProps {
  product?: ProductDto;
}

const ProductShopDetails = ({ product }: ProductShopDetailsProps) => {
  const [size, setSize] = useState<SizeType>("m");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <></>;

  const { name, description, price } = product || {};

  const addProductToBag = async () =>
    await db.products.put({ product, size, quantity, productId: product.id });

  const handleSizeInput = (size: SizeType) => {
    setSize(size);
  };

  const handleQuantityInput = (quantity: number) => {
    setQuantity(quantity);
  };

  return (
    <Stack gap={2}>
      <Stack>
        <TextTypography
          text={name}
          variant="h4"
          textTransform="uppercase"
          fontWeight="bold"
        />
        <TextTypography text={"Silver Green"} variant="body1" />
      </Stack>

      <TextTypography text={description} variant="body2" lineHeight={2} />
      {/* <Stack gap={2}>
        <TextTypography text="Color: WHITE" fontWeight="bold" />
        <ColorInput />
      </Stack> */}
      <Stack gap={2}>
        <Stack direction="row" justifyContent="space-between">
          <TextTypography text={`Sélectionner Taille (EU)`} fontWeight="bold" />
          <TextTypography text={`Tableau des tailles`} />
        </Stack>
        <SizeInput size={size} handleSizeInput={handleSizeInput} />
      </Stack>
      <Stack direction="row" alignItems="end" gap={2} pt={4}>
        <TextTypography
          text={`${price} MAD`}
          variant="h6"
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
          <PrimaryButton
            sx={{
              px: 3,
            }}
            onClick={addProductToBag}
            text={txKeys.services.shop.addToBag}
            size="small"
            color="info"
            endIcon={<FaBagShopping color="white" />}
            fullWidth
          />
          <FaRegHeart
            onClick={() => undefined}
            color={theme.palette.info.main}
            size={30}
          />
        </Stack>
      </Stack>
      <Stack>
        <DeliverySection />
      </Stack>
    </Stack>
  );
};

export default ProductShopDetails;
