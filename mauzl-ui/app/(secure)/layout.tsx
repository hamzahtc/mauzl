"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUsersControllerFindMe } from "@/generated/hooks";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoading, isError, error, data } = useUsersControllerFindMe({
    query: { retry: 0 },
  });
  const pathname = usePathname();

  React.useEffect(() => {
    // Redirect on 401 error
    if (isError && error?.response?.status === 401) {
      router.push(`/signin?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isError, error, router]);

  // Show nothing while loading or if there's no data
  if (isLoading || !data) {
    return null;
  }

  return children;
}
