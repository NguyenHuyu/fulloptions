import User from "@/lib/models/User";
import { connectToDB } from "@/mongoose";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

connectToDB();

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  const hash = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hash,
  });
  try {
    await newUser.save();
    return new NextResponse("User đã được tạo", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Lỗi", {
      status: 500,
    });
  }
};
