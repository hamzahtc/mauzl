"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const useQueryParamsRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(searchParams.toString());

  const setQueryParam = (
    key: string,
    value: string | number | string[] | undefined
  ) => {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) {
      currentParams.delete(key); // Remove the parameter if value is undefined or empty array
    } else if (Array.isArray(value)) {
      currentParams.set(key, value.join(",")); // Join array into a comma-separated string
    } else {
      currentParams.set(key, value.toString()); // Single value as string
    }
  };

  const removeQueryParam = (key: string, valueToRemove?: string) => {
    const currentValue = currentParams.get(key);

    if (currentValue) {
      const values = currentValue.split(",");

      if (values.length > 1) {
        if (valueToRemove) {
          const updatedValues = values.filter(
            (value) => value !== valueToRemove
          );
          if (updatedValues.length > 0) {
            currentParams.set(key, updatedValues.join(","));
          } else {
            currentParams.delete(key);
          }
        }
      } else {
        currentParams.delete(key);
      }
    }
  };

  const pushQueryParams = () => {
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  const getQueryParam = (key: string) => {
    return currentParams.get(key);
  };

  return {
    setQueryParam,
    removeQueryParam,
    pushQueryParams,
    getQueryParam,
  };
};

export default useQueryParamsRouter;
