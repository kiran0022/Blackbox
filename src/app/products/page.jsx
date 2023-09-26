import React from "react";

import Products from "../components/Products";
import { getAllProducts } from "@/utils/getAllProducts";

export default async function page() {
  const products = await getAllProducts();
  return (
    <div>
      <Products products={products} />
    </div>
  );
}
