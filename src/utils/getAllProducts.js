export async function getAllProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });

  if (!res.ok) return "error fetching products data";

  return res.json();
}
