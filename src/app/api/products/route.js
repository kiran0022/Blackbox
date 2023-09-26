import Product from "@/models/products";
import { connectDB } from "@/utils/mongoDB";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(request) {
  await connectDB();
  const data = await request.json();
  const newProduct = await new Product(data);
  const saveProduct = await newProduct.save();
  return NextResponse.json(saveProduct, { status: 200 });
}

export async function PUT(request) {
  const { name, description, price, quantity } = await request.json();

  if (!name || !description || !price || !quantity)
    return NextResponse.json({ message: "data not specified" });

  return NextResponse.json({});
}

export async function DELETE(request) {
  const { id } = await request.json();
}
