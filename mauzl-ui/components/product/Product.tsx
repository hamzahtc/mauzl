import * as React from "react";
import { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import Image from "next/image";
import { theme } from "@/styles/stylesheet";
import { ProductDto } from "@/models";
import Link from "next/link";
import TextTypography from "../common/TextTypography";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { IoBagAdd } from "react-icons/io5";
import {
  getProductsControllerFindAllQueryKey,
  getWishListsControllerFindOneQueryKey,
  useUsersControllerFindMe,
  useWishListsControllerCreate,
  useWishListsControllerRemoveFromWishlist,
} from "@/generated/hooks";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import { db } from "@/utils/db";
import { useLiveQuery } from "dexie-react-hooks";

interface ProductProps {
  product: ProductDto;
}

const Product = ({ product }: ProductProps) => {
  const [hovered, setHovered] = useState(false);
  const [liked] = useState(false);

  const { mutateAsync: addToWishlist } = useWishListsControllerCreate();
  const { mutateAsync: removeFromWishlist } =
    useWishListsControllerRemoveFromWishlist();

  const wishlistProducts = useLiveQuery(() => db.wishlist.toArray());

  const me = useUsersControllerFindMe({
    query: {
      retry: 0,
    },
  });

  const addProductToWishlist = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (me.data) {
      await addToWishlist({
        data: {
          product,
        },
      }).then(() => {
        QueryClientInstance.invalidateQueries({
          queryKey: getProductsControllerFindAllQueryKey(),
        });
        QueryClientInstance.invalidateQueries({
          queryKey: getWishListsControllerFindOneQueryKey(),
        });
      });
    } else {
      await db.wishlist.put({
        product,
        productId: product.id,
        addedAt: new Date(),
      });
    }
  };

  const removeProductFromWishlist = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (me.data) {
      await removeFromWishlist({ id: product.id }).then(() => {
        QueryClientInstance.refetchQueries({
          queryKey: getProductsControllerFindAllQueryKey(),
        });
        QueryClientInstance.refetchQueries({
          queryKey: getWishListsControllerFindOneQueryKey(),
        });
      });
    } else {
      await db.wishlist.delete(product.id as never);
    }
  };

  const isInWishlist = me.data
    ? product.isInWishlist
    : wishlistProducts?.find(
        (wishlistProduct) => wishlistProduct.productId === product.id
      );
  return (
    <Link href={`/shop/products/${product.id}`}>
      <Stack gap={1}>
        <Stack
          alignItems="center"
          sx={{ position: "relative" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            alt="models"
            src={hovered ? product.images[1] : product.images[0]}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "300px",
              height: "400px",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />

          <IconButton
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "white",
              },
            }}
            onClick={
              isInWishlist ? removeProductFromWishlist : addProductToWishlist
            }
          >
            {isInWishlist ? (
              <AiFillHeart color={theme.palette.grey[900]} />
            ) : (
              <AiOutlineHeart color={theme.palette.grey[900]} />
            )}
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px", // left instead of right
              backgroundColor: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "white",
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              // Add logic for this icon, e.g., open modal, add to cart, etc.
            }}
          >
            {liked ? (
              <IoBagAdd color={theme.palette.grey[900]} />
            ) : (
              <IoBagAddOutline color={theme.palette.grey[900]} />
            )}
          </IconButton>

          {/* <Stack
            gap={1}
            sx={{
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          >
            <PrimaryButton
              text="-10%"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
              }}
            />
            <PrimaryButton
              text="New"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.info.main,
              }}
            />
          </Stack> */}
        </Stack>
        <Stack alignItems="start" gap={1}>
          <Stack>
            <TextTypography
              text={product.name}
              variant="body2"
              fontSize="0.8rem"
            />
            <TextTypography
              fontWeight="bold"
              fontSize="0.8rem"
              text={`MAD ${product.price}.00`}
            />

            <TextTypography
              fontSize="0.8rem"
              text={product.category.name}
              color="primary"
              variant="body2"
            />
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Product;
