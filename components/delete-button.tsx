"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleClick = async (e: any) => {
    const ok = confirm("Are you sure you want to delete this item?");
    if (ok) {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories/" + id, {
        method: "DELETE",
      });
      router.refresh();
    } else {
      return;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-600 rounded py-2 px-3 text-white"
    >
      Delete
    </button>
  );
}
