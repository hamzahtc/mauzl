import React, { SyntheticEvent, useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import txKeys from "@/i18n/translations";
import { status } from "@/common/contants";
import { useTranslation } from "@/i18n/useTranslation";
import TextTypography from "../common/TextTypography";
import useQueryParamsRouter from "@/hooks/useQueryParamsRouter";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import { getProductsControllerFindAllQueryKey } from "@/generated/hooks";

const StatusFilter = () => {
  const translate = useTranslation();
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const { setQueryParam, pushQueryParams, getQueryParam } =
    useQueryParamsRouter();

  const statuesParam = getQueryParam("statuses") || undefined;

  const handleStatusChange = (event: SyntheticEvent, checked: boolean) => {
    const statusName = (event.target as HTMLInputElement).name;

    const updatedSelectedStatus = checked
      ? [...selectedStatuses, statusName]
      : selectedStatuses.filter((s) => s !== statusName);

    setSelectedStatuses(updatedSelectedStatus);

    // Call setQueryParam with updatedSelectedStatus
    setQueryParam("statuses", updatedSelectedStatus); // It will handle the deletion if empty
    pushQueryParams();

    QueryClientInstance.refetchQueries({
      queryKey: getProductsControllerFindAllQueryKey(),
      exact: true,
    });
  };

  useEffect(() => {
    if (statuesParam) {
      setSelectedStatuses(statuesParam.split(","));
    } else {
      setSelectedStatuses([]);
    }
  }, [statuesParam]);

  return (
    <Stack gap={1}>
      <TextTypography
        text={txKeys.services.shop.status.title}
        variant="h6"
        sx={{
          "&:hover": { cursor: "pointer" },
        }}
      />
      <FormGroup>
        {status.map(({ name }) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                color="info"
                name={name}
                checked={selectedStatuses.includes(name)}
                onChange={handleStatusChange}
              />
            }
            label={translate(
              txKeys.services.shop.status.list[
                name as keyof typeof txKeys.services.shop.status.list
              ].name
            )}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};

export default StatusFilter;
