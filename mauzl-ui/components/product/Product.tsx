import * as React from "react";
import { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import Image from "next/image";
import { HelveticaNow, theme } from "@/styles/stylesheet";
import { ProductDto } from "@/models";
import Link from "next/link";
import PrimaryButton from "../common/PrimaryButton";
import TextTypography from "../common/TextTypography";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

interface ProductProps {
  product: ProductDto;
}

const Product = ({ product }: ProductProps) => {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

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
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
          >
            {liked ? (
              <AiFillHeart color={theme.palette.info.main} />
            ) : (
              <AiOutlineHeart color={theme.palette.info.main} />
            )}
          </IconButton>

          <Stack
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
          </Stack>
        </Stack>
        <Stack alignItems="start" gap={1}>
          <Stack>
            <TextTypography text={product.name} variant="body2" />
            <TextTypography text={product.category.name} variant="body2" />
          </Stack>
          <TextTypography
            text={`${product.price} MAD`}
            fontFamily={HelveticaNow.style.fontFamily}
          />
        </Stack>
      </Stack>
    </Link>
  );
};

export default Product;
