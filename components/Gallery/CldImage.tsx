"use client";
import React, { useTransition } from "react";
import { CldImage } from "next-cloudinary";
import { Heart } from "../ui/heart";
import { changeAsFarvorate } from "@/lib/actions/gallery";
import { FullHeart } from "../ui/fullheart";

export default function CldImages(props: any & { imageData: any }) {
  const [transition, startTransition] = useTransition();

  console.log(transition);

  const { imageData } = props;

  const isFarvorate = imageData.tags.includes("favorite");

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFarvorate ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              changeAsFarvorate(imageData.public_id, true);
            });
          }}
          className="absolute z-20  top-2 hover:text-white text-red-500 right-2"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              changeAsFarvorate(imageData.public_id, false);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-500 text-white z-20"
        />
      )}
    </div>
  );
}
