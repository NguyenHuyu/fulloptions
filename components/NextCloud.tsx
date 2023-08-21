"use client";

import React, { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import UploadButton from "./UploadButton";

export default function NextCloud() {
  const [imageId, setImageId] = useState<string>("");

  return (
    <main className="space-y-10">
      <UploadButton setImageId={setImageId} />

      {imageId && (
        <CldImage
          src={imageId}
          width="900"
          height="600"
          sizes="100vw"
          alt="NextsssCloud"
        />
      )}
      <br />
    </main>
  );
}
