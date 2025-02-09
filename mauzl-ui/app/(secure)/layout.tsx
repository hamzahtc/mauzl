// "use client";

// import * as React from "react";
// import { useRouter } from "next/navigation";
// import { useUsersControllerFindMe } from "@/generated/hooks";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const { isLoading, data } = useUsersControllerFindMe();

//   React.useEffect(() => {
//     if (data || isLoading || !router) return;

//     router.push("/");
//   }, [data, isLoading, router]);

//   if (!data || isLoading) {
//     return null;
//   }

//   return children;
// }

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useUsersControllerFindMe } from "@/generated/hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isLoading, isError, error, data } = useUsersControllerFindMe({
    query: { retry: 0 },
  });

  React.useEffect(() => {
    // Redirect on 401 error
    if (isError && error?.response?.status === 401) {
      router.push("/api/auth/google/callback");
    }
  }, [isError, error, router]);

  // Show nothing while loading or if there's no data
  if (isLoading || !data) {
    return null;
  }

  return children;
}
