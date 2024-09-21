import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import QuantityInput from "./QuantityInput";
import Button from "../common/Button";
import txKeys from "@/i18n/translations";
import ColorInput from "./ColorInput";
import SizeInput from "./SizeInput";

const ProductShopDetails = () => {
  return (
    <Stack gap={4}>
      <Box>
        <Typography
          variant="h4"
          textTransform="uppercase"
          fontWeight="bold"
          component="div"
          color="black"
        >
          Hoodie - Pullover Hoodie Sweatshirt
        </Typography>
      </Box>
      <Box>
        <Typography component="div" color="grey" lineHeight={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique
          malesuada elit, ut facilisis tellus elementum id. Nullam id
          consectetur diam. Pellentesque nec tristique sapien etiam non augue
          lacus.
        </Typography>
      </Box>
      <Stack gap={2}>
        <Typography fontWeight="bold" component="div" color="black">
          Color: WHITE
        </Typography>
        <ColorInput />
      </Stack>
      <Stack gap={2}>
        <Typography fontWeight="bold" component="div" color="black">
          Size: SMALL
        </Typography>
        <SizeInput />
      </Stack>
      <Stack direction="row" alignItems="end" gap={2}>
        <Typography
          variant="h5"
          fontWeight="bold"
          component="div"
          color="primary"
        >
          $27.00
        </Typography>
        <Typography
          component="div"
          color="black"
          sx={{ textDecoration: "line-through" }}
        >
          $34.00
        </Typography>
      </Stack>
      <Stack direction="row" gap={4} justifyContent="start" alignItems="center">
        <Box flex={1}>
          <QuantityInput />
        </Box>
        <Box flex={3}>
          <Button
            text={txKeys.services.shop.addToChart}
            size="small"
            fullWidth
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductShopDetails;
