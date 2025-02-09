import { Box, Chip, Pagination, Stack } from "@mui/material";
import Product from "./Product";
import {
  getProductsControllerFindAllQueryKey,
  useCategoriesControllerFindAll,
  useProductsControllerFindAll,
  useUsersControllerFindMe,
} from "@/generated/hooks";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useQueryParamsRouter from "@/hooks/useQueryParamsRouter";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import {
  MAX_PRICE,
  MIN_PRICE,
  PRODUCTS_PAGINATION_LIMIT,
} from "@/utils/constant";
import { useTranslation } from "@/i18n/useTranslation";
import txKeys from "@/i18n/translations";
import { CategoryDto } from "@/models";

interface FilterChip {
  key: string;
  label: string;
}

const Products = () => {
  const [page, setPage] = useState(1);
  const limit = PRODUCTS_PAGINATION_LIMIT;
  const searchParams = useSearchParams();

  const { pushQueryParams, removeQueryParam } = useQueryParamsRouter();
  const name = searchParams.get("name") || undefined;
  const categoryId = Number(searchParams.get("category")) || undefined;
  const minPrice = Number(searchParams.get("min")) || MIN_PRICE;
  const maxPrice = Number(searchParams.get("max")) || MAX_PRICE;
  const sortBy = searchParams.get("sortBy") || undefined;
  const statuses = searchParams.get("statuses") || undefined;

  const { data: categories } = useCategoriesControllerFindAll();
  const { data: me, isLoading } = useUsersControllerFindMe();

  const products = useProductsControllerFindAll({
    page,
    limit,
    name,
    categoryId,
    minPrice,
    maxPrice,
    sortBy,
    statuses,
  });

  const [filters, setFilters] = useState<readonly FilterChip[]>([]);
  const translate = useTranslation();

  useEffect(() => {
    const filterChips: FilterChip[] = [];

    if (name) {
      filterChips.push({ key: "name", label: `${name}` });
    }
    if (categoryId) {
      filterChips.push({
        key: "category",
        label: `${categories?.find((category: CategoryDto) => category.id == categoryId)?.name}`,
      });
    }
    if (minPrice !== MIN_PRICE || maxPrice !== MAX_PRICE) {
      filterChips.push({
        key: "min&max",
        label: `${minPrice} MAD - ${maxPrice} MAD`,
      });
    }
    if (sortBy) {
      filterChips.push({
        key: "sortBy",
        label: `${translate(txKeys.services.shop.sort.list[sortBy as keyof typeof txKeys.services.shop.sort.list].name)}`,
      });
    }

    if (statuses) {
      const statusArray = statuses.split(",");
      statusArray.forEach((status) => {
        filterChips.push({
          key: `status-${status}`,
          label: `${translate(txKeys.services.shop.status.list[status as keyof typeof txKeys.services.shop.status.list].name)}`,
        });
      });
    }

    setFilters(filterChips);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, categoryId, minPrice, maxPrice, sortBy, statuses, categories]);

  if (isLoading) {
    console.log(me);
  }

  if (products.isLoading) return <></>;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setPage(pageNumber);
  };
  const totalProducts = products.data?.total;

  const handleDelete = async (key: string) => {
    if (key.startsWith("status")) {
      removeQueryParam("statuses", key.split("-").pop());
    } else {
      const params = key.split("&");
      params.forEach((param) => removeQueryParam(param));
    }
    pushQueryParams();
    await QueryClientInstance.refetchQueries({
      queryKey: [getProductsControllerFindAllQueryKey],
      exact: true,
    });
  };

  return (
    <Stack alignItems="center" gap={4}>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} p={1}>
        {filters.map(({ key, label }) => (
          <Chip
            key={key}
            color="info"
            onDelete={() => handleDelete(key)}
            label={label}
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        gap={4}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        px={2}
      >
        {products.data?.products.map((product) => (
          <Box key={product.id} minWidth="250px">
            <Product product={product} />
          </Box>
        ))}
      </Stack>
      <Box>
        <Pagination
          count={Math.ceil((totalProducts || 0) / limit)}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </Box>
    </Stack>
  );
};

export default Products;
