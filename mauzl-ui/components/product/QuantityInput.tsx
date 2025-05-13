import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface QuanltityInputProps {
  quantity: number;
  handleQuantityInput: (quantity: number) => void;
}

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
            "text-sm font-inherit leading-[1.375] h-8 text-black border border-[#f5c06a] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-lg mx-2 px-3 py-2 w-24 text-center hover:border-[#f5c06a] focus:border-[#f5c06a] focus:shadow-[0_0_0_3px_rgba(245,192,106,0.5)] outline-none",
          readOnly: true,
        },
        incrementButton: {
          className:
            "flex justify-center items-center w-8 h-8 rounded-full border border-[#f5c06a] bg-[#f5c06a] text-white hover:bg-[#e0a84f] transition-all duration-150 ease-in-out order-1",
          children: <AddIcon fontSize="small" />,
        },
        decrementButton: {
          className:
            "flex justify-center items-center w-8 h-8 rounded-full border border-[#f5c06a] bg-[#f5c06a] text-white hover:bg-[#e0a84f] transition-all duration-150 ease-in-out",
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput({
  quantity,
  handleQuantityInput,
}: QuanltityInputProps) {
  const handleChange = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.PointerEvent
      | React.KeyboardEvent,
    value: number | null
  ) => {
    if (value !== null) {
      handleQuantityInput(value);
    }
  };

  return (
    <NumberInput
      value={quantity}
      onChange={handleChange}
      aria-label="Quantity Input"
      defaultValue={1}
      min={1}
      max={99}
    />
  );
}
