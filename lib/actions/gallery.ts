"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function changeAsFarvorate(publicId: string, isFavorate: boolean) {
  if (isFavorate) {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  }

  revalidatePath("/gallery");
}
