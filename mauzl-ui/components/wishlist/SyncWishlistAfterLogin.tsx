"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getWishListsControllerFindOneQueryKey,
  useWishListsControllerAddMultiple,
} from "@/generated/hooks";
import { db } from "@/utils/db";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";

export const SyncWishlistAfterLogin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { mutateAsync: addWishlistProducts } =
    useWishListsControllerAddMultiple({
      mutation: { retry: 0 },
    });

  const hasSynced = useRef(false); // 👈 guard to avoid duplicate calls

  useEffect(() => {
    const state = searchParams.get("auth");
    if (state !== "success" || hasSynced.current) return;

    hasSynced.current = true; // 👈 mark as executed

    const sync = async () => {
      const localWishlist = await db.wishlist.toArray();
      const productIds = localWishlist.map((item) => String(item.productId));

      if (productIds.length) {
        await addWishlistProducts({ data: { productIds } }).then(() => {
          QueryClientInstance.invalidateQueries({
            queryKey: getWishListsControllerFindOneQueryKey(),
          });
        });
        await db.wishlist.clear();
      }

      // Clean up the URL
      const newSearch = new URLSearchParams(searchParams.toString());
      newSearch.delete("auth");
      router.replace(`${window.location.pathname}?${newSearch.toString()}`);
    };

    sync();
  }, [addWishlistProducts, router, searchParams]);

  return null;
};
