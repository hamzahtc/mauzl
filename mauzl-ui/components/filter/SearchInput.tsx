"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "@/i18n/useTranslation";
import txKeys from "@/i18n/translations";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import { getProductsControllerFindAllQueryKey } from "@/generated/hooks";
import useQueryParamsRouter from "@/hooks/useQueryParamsRouter";
import isEmpty from "lodash/isEmpty";

const SearchInput = () => {
  const translate = useTranslation();
  const [search, setSearch] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const { setQueryParam, pushQueryParams, removeQueryParam, getQueryParam } =
    useQueryParamsRouter();

  const nameParam = getQueryParam("name");

  useEffect(() => {
    if (!nameParam) {
      setSearch("");
    }
  }, [nameParam]);

  const handleInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (isEmpty(search)) removeQueryParam("name");
      else {
        setQueryParam("name", search);
        QueryClientInstance.refetchQueries({
          queryKey: getProductsControllerFindAllQueryKey(),
          exact: true,
        });
      }
      pushQueryParams();
    }
  };

  return (
    <TextField
      fullWidth
      value={search}
      onChange={handleInputChange}
      onKeyDown={handleInputSearch}
      placeholder={translate(txKeys.common.search.label)}
      sx={{
        minWidth: "270px",
        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
          "& input": {
            fontSize: "14px",
          },
        },
        "& .MuiInputLabel-root": {
          fontSize: "13px",
        },
      }}
      size="small"
      color="info"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
