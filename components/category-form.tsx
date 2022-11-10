"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CategoryForm() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
    router.refresh();
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-gray-900 px-3 py-2 rounded"
        placeholder="Nama Kategori"
      />
      <button
        type="submit"
        className="bg-gray-900 rounded py-2 px-3 text-white"
      >
        Save
      </button>
    </form>
  );
}
