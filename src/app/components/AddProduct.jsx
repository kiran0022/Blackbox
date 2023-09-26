"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onsubmit = async (data) => {
    console.log(data);

    const { name, description, price, quantity } = data;

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({ name, description, price, quantity }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("response", res.json());
        router.push("/products/");
        router.refresh();
      } else {
        throw new Error("failed to create product");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" max-w-max m-auto ">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-3 w-72"
      >
        <input
          type="text"
          {...register("name", { required: true })}
          className="border-2 p-2"
          placeholder="Product name"
        />
        <input
          type="text"
          {...register("description", { required: true })}
          className="border-2 p-2"
          placeholder="Product description"
        />
        <input
          type="number"
          {...register("price", { required: true })}
          className="border-2 p-2"
          placeholder="Product price"
        />
        <input
          type="number"
          {...register("quantity", { required: true })}
          className="border-2 p-2"
          placeholder="Product quantity"
        />
        {(errors.name ||
          errors.description ||
          errors.price ||
          errors.quantity) && <span>All field is required</span>}
        <input type="submit" value="Add product" />
      </form>
    </div>
  );
}
