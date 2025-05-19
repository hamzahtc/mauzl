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
import { toast, ToastContentProps } from "react-toastify";
import cx from "clsx";
import {
  getWishListsControllerFindOneQueryKey,
  useWishListsControllerCreate,
} from "@/generated/hooks";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";

interface ProductShopDetailsProps {
  product?: ProductDto;
}

const ProductShopDetails = ({ product }: ProductShopDetailsProps) => {
  const [size, setSize] = useState<SizeType>("m");
  const [quantity, setQuantity] = useState(1);

  const { mutateAsync: createWishlistProduct } = useWishListsControllerCreate();

  if (!product) return <></>;

  const createWishlist = async () => {
    await createWishlistProduct({
      data: {
        product,
      },
    }).then(() => {
      QueryClientInstance.refetchQueries({
        queryKey: getWishListsControllerFindOneQueryKey(),
        exact: true,
      });
    });
  };

  const { name, description, price } = product || {};

  const addProductToBag = async () => {
    await db.products
      .put({ product, size, quantity, productId: product.id })
      .then(() => {
        toast.error(CustomNotification, {
          data: {
            title: "Oh Snap!",
            content: "Something went wrong",
          },
          ariaLabel: "Something went wrong",
          autoClose: false,
          progress: 0.3,
          icon: false,
          theme: "colored",
        });
      });
  };
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
            onClick={createWishlist}
            color={theme.palette.info.main}
            size={30}
            style={{
              cursor: "pointer",
            }}
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

type CustomNotificationProps = ToastContentProps<{
  title: string;
  content: string;
}>;

function CustomNotification({
  closeToast,
  data,
  toastProps,
}: CustomNotificationProps) {
  const isColored = toastProps.theme === "colored";

  return (
    <div className="flex flex-col w-full p-2">
      <h3
        className={cx(
          "text-sm font-semibold",
          isColored ? "text-white" : "text-zinc-800"
        )}
      >
        {data.title}
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-sm">{data.content}</p>
        <button
          onClick={closeToast}
          className={cx(
            "ml-auto transition-all text-xs  border rounded-md px-4 py-2 text-white active:scale-[.95]",
            isColored ? "bg-transparent" : "bg-zinc-900"
          )}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
