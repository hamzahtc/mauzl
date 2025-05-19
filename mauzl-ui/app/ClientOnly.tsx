// components/common/ClientOnly.tsx
"use client";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
