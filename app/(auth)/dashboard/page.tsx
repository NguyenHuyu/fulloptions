"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function DashBoardPage() {
  return <div onClick={() => signOut()}>Alapap</div>;
}
