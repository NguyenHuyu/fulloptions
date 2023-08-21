"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function Login() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      This is a protected page.
    </div>
  );
}
