"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CategoryForm() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("test");
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/categories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
