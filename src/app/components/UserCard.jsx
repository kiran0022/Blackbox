"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function UserCard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/addProduct");
    },
  });
  return (
    <div>
      <div className="text-3xl text-center my-6 flex flex-col gap-1 max-w-max m-auto ">
        <p className="bg-black rounded-md text-white font-semibold p-2 ">
          {" "}
          user: {session?.user?.name || null}
        </p>

        <br />
        <p className="bg-black rounded-md text-white font-semibold p-2 ">
          role: {session?.user?.role || null}
        </p>
      </div>
    </div>
  );
}
