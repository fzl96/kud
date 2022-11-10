import { use } from "react";

import CategoryForm from "@/components/category-form";
import DeleteButton from "@/components/delete-button";

const getCategories = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories", {
    cache: "no-store",
  });
  return res.json();
};

export default function CategoryPage() {
  const categories = use(getCategories());

  return (
    <div>
      <div>Tambah Kategori</div>
      <CategoryForm />
      {/* create a table that only show 5 datas per page */}
      <table className="w-full">
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: { id: string; name: string }) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <button>Edit</button>
                <DeleteButton id={category.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
