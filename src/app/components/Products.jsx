import Link from "next/link";
import React from "react";
import { PiTShirtDuotone } from "react-icons/pi";
export default function Products({ products: data }) {
  return (
    <div className="grid grid-cols-4">
      {Array.isArray(data) ? (
        data.map((item) => {
          return (
            <Link
              href={`/products/${item._id}`}
              key={item._id}
              className="border-2 p-3 m-2"
            >
              <div>
                <PiTShirtDuotone className="text-5xl" />
              </div>
              <div className="">
                <div className="block">{item.name}</div>
                <div>{item.description}</div>
                <div className="inline-block">{item.price}</div>
                <div>{item.quantity}</div>
              </div>
            </Link>
          );
        })
      ) : (
        <h1>Oops! Empty products</h1>
      )}
    </div>
  );
}
