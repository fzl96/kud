"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MemberForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleMemberSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address, phone }),
    });
    router.refresh();
    setName("");
    setAddress("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={handleMemberSubmit} className="flex gap-3">
        <input
          type="text"
          className="border-2 border-gray-900 rounded px-3 py-2"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="border-2 border-gray-900 rounded px-3 py-2"
          placeholder="Alamat"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="border-2 border-gray-900 rounded px-3 py-2"
          placeholder="No. HP"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="bg-gray-900 text-white px-3 py-2 rounded">
          Save
        </button>
      </form>
    </>
  );
}
