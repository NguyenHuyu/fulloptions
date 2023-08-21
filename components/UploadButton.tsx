"use client";

import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { useRouter } from "next/navigation";

type UploadResult =
  | {
      event: "success";
      info: {
        public_id: string;
      };
    }
  | any;

export default function UploadButton({ setImageId, isRefetch }: any) {
  const router = useRouter();
  return (
    <CldUploadButton
      onUpload={(result: UploadResult) => {
        isRefetch && router.refresh();
      }}
      uploadPreset="nextmultiple"
    >
      Upload
    </CldUploadButton>
  );
}
