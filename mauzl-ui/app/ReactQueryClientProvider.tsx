"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
};

export const QueryClientInstance = new QueryClient(queryClientOptions);

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => QueryClientInstance);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
