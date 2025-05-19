"use client";

import React from "react";
import { Box, Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import Divider from "@mui/material/Divider";
import PrimaryButton from "../common/PrimaryButton";
import Link from "next/link";
import { useWishListsControllerFindOne } from "@/generated/hooks";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/utils/db";
import Product from "../product/Product";

const Wishlist = () => {
  const wishlist = useWishListsControllerFindOne({
    query: { retry: 0, enabled: true },
  });
  const userProducts = wishlist?.data?.products;

  const wishlistProducts = useLiveQuery(() => db.wishlist.toArray());

  const products = userProducts
    ? userProducts
    : wishlistProducts?.map((item) => item.product);

  if (wishlist.isLoading) return <></>;

  if (!products || products.length === 0) {
    return (
      <Stack gap={2} justifyContent="center">
        <TextTypography
          text="TA WISHLIST EST VIDE"
          fontWeight="bold"
          fontSize="2rem"
          color="black"
        />
        <TextTypography
          text="Dès que tu auras ajouté un article à ta wishlist, il apparaîtra ici. Tes listes sont uniquement disponibles sur cet appareil et expireront à la fin de cette session. C’est parti ?"
          fontSize="1rem"
        />
        <Box>
          <Link href="/shop">
            <PrimaryButton
              size="large"
              text="Continue shopping"
              sx={{ minWidth: "270px", bgcolor: "black" }}
            />
          </Link>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack direction="column" width="100%" gap={3}>
      <Stack>
        <TextTypography
          text="WISHLIST"
          fontWeight="bold"
          fontSize="2rem"
          color="black"
        />
        <TextTypography text="8 Articles" color="black" />
      </Stack>

      <Stack direction="row" gap={2}>
        <Stack
          direction="row"
          gap={4}
          flex={2}
          alignItems="start"
          justifyContent="start"
          flexWrap="wrap"
        >
          {products.map((product) => (
            <Box key={product.id} minWidth="250px">
              <Product product={product} />
            </Box>
          ))}
        </Stack>
        {wishlist.error && (
          <Stack flex="1" gap={2} bgcolor="#f9f9fb" p={2} maxHeight="180px">
            <TextTypography
              text="NE PERDS PAS TA WISHLIST"
              fontWeight="bold"
              textTransform="uppercase"
            />
            <Stack direction="row" justifyContent="space-between">
              <TextTypography text="Inscris-toi ou connecte-toi pour enregistrer tes articles et ne pas les perdre." />
            </Stack>
            <Divider />
            <PrimaryButton
              size="large"
              type="submit"
              text="Connexion/Inscription"
              sx={{ minWidth: "270px", bgcolor: "black" }}
            />
          </Stack>
        )}
      </Stack>
      {wishlist.data && (
        <Stack maxWidth="300px" pt={3}>
          <PrimaryButton
            size="large"
            text="RETOUR À MON COMPTE"
            sx={{ bgcolor: "black" }}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Wishlist;
