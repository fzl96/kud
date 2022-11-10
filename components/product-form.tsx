"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Category = {
  id: string;
  name: string;
};

interface ProductFormProps {
  categories: Category[];
}

export default function ProductForm({ categories }: ProductFormProps) {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleProductSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, categoryId, price }),
    });
    router.refresh();
    setName("");
    setCategoryId("");
    setPrice(0);
  };

  return (
    <form className="flex gap-3" onSubmit={handleProductSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 px-3 py-2 rounded border-gray-900"
        placeholder="Nama Produk"
      />
      <input
        type="number"
        className="border-2 border-gray-900 px-3 py-2 rounded"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="border-2 border-gray-900 rounded px-3 py-2"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button className="bg-gray-900 rounded px-3 py-2 text-white">Save</button>
    </form>
  );
}
