import { use } from "react";

import CategoryForm from "@/components/category-form";

const getCategories = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories");
  return res.json();
};

export default function CategoryPage() {
  const categories = use(getCategories());

  return (
    <div>
      {/* <div>test</div> */}
      <CategoryForm />
      <ul>
        {categories.length != 0
          ? categories.map((category: { id: string; name: string }) => (
              <li key={category.id}>{category.name}</li>
            ))
          : ""}
      </ul>
    </div>
  );
}
