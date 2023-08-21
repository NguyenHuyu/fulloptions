import Login from "@/components/Login";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  if (!session) {
    redirect("/api/auth/signin");
  }
  return <Login />;
}
