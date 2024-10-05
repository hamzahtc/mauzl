import React, { useEffect } from "react";
import { Slider, SliderValueLabelProps, Stack, Tooltip } from "@mui/material";
import txKeys from "@/i18n/translations";
import PrimaryButton from "../common/PrimaryButton";
import TextTypography from "../common/TextTypography";
import useQueryParamsRouter from "@/hooks/useQueryParamsRouter";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import { getProductsControllerFindAllQueryKey } from "@/generated/hooks";
import { MAX_PRICE, MIN_PRICE } from "@/utils/constant";

const PriceSliderTooltip = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={`${value} MAD`}>
      {children}
    </Tooltip>
  );
};

const PriceFilter = () => {
  const { setQueryParam, pushQueryParams, getQueryParam } =
    useQueryParamsRouter();

  const min = Number(getQueryParam("min")) || MIN_PRICE;
  const max = Number(getQueryParam("max")) || MAX_PRICE;

  const [price, setPrice] = React.useState<number[]>([min, max]);

  useEffect(() => {
    setPrice([min, max]);
  }, [min, max]);

  const handleInputChange = async () => {
    setQueryParam("min", price[0]);
    setQueryParam("max", price[1]);
    pushQueryParams();
    await QueryClientInstance.refetchQueries({
      queryKey: [getProductsControllerFindAllQueryKey],
      exact: true,
    });
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };
  return (
    <Stack gap={1}>
      <TextTypography
        text={txKeys.services.shop.price.title}
        variant="h6"
        sx={{
          "&:hover": { cursor: "pointer" },
        }}
      />
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        color="info"
        step={100}
        slots={{
          valueLabel: PriceSliderTooltip,
        }}
        min={MIN_PRICE}
        max={MAX_PRICE}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TextTypography
          text={`${price[0]} MAD - ${price[1]} MAD`}
          fontSize="15px"
        />
        <PrimaryButton
          text={txKeys.common.filter.label}
          size="small"
          color="info"
          onClick={handleInputChange}
        />
      </Stack>
    </Stack>
  );
};

export default PriceFilter;
