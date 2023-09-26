import { getAllProducts } from "@/utils/getAllProducts";
import { NextResponse } from "next/server";

const url = "http://localhost:3000/api/products";
export async function GET(request, { params: { id } }) {
  // const id = await request.json()
  console.log(id);
  const match = await getAllProducts();
  console.log(match);
  const filter_id = match?.filter((item) => {
    return item._id == id;
  });

  // const res = await fetch(`${url} / ${filter_id}`);
  // const data = await res.json();
  return NextResponse.json(filter_id);
}
