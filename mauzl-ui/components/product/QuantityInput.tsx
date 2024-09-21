import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseNumberInput
      slots={{
        root: "div",
        input: "input",
        incrementButton: "button",
        decrementButton: "button",
      }}
      slotProps={{
        root: {
          className: "flex flex-row items-center text-gray-500",
        },
        input: {
          className:
            "text-sm font-inherit leading-[1.375] text-black border border-gray-200 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-lg mx-2 px-3 py-2 w-24 text-center hover:border-blue-400 focus:border-blue-400 focus:shadow-[0_0_0_3px_rgba(182,218,255)] outline-none",
        },
        incrementButton: {
          className:
            "flex justify-center items-center w-8 h-8 rounded-full border border-gray-200 bg-gray-50 text-gray-900 hover:bg-blue-500 hover:border-blue-400 hover:text-gray-50 transition-all duration-150 ease-in-out order-1",
          children: <AddIcon fontSize="small" />,
        },
        decrementButton: {
          className:
            "flex justify-center items-center w-8 h-8 rounded-full border border-gray-200 bg-gray-50 text-gray-900 hover:bg-blue-500 hover:border-blue-400 hover:text-gray-50 transition-all duration-150 ease-in-out",
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput() {
  return (
    <NumberInput
      aria-label="Quantity Input"
      defaultValue={1}
      min={1}
      max={99}
    />
  );
}
