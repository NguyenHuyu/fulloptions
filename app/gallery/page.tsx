import React from "react";
import cloudinary from "cloudinary";
import CldImage from "@/components/Gallery/CldImage";
import UploadButton from "@/components/UploadButton";
import { Button } from "@/components/ui/button";

export default async function GalleryPage() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute();

  return (
    <section>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center p-6">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton isRefetch />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results?.resources.map((result: any) => (
            <CldImage
              width="500"
              height="500"
              public_id={result.public_id}
              key={result.public_id}
              src={result.public_id}
              imageData={result}
              alt="rththt"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
