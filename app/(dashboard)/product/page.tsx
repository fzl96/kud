import ProductForm from "@/components/product-form";
import { use } from "react";

const getCategories = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories", {
    cache: "no-store",
  });
  return res.json();
};

const getProducts = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
    cache: "no-store",
  });
  return res.json();
};

export default function ProductPage() {
  const categories = use(getCategories());
  const products = use(getProducts());

  console.log(products);
  return (
    <>
      <div>
        <h1 className="font semibold text-2xl">Add Product</h1>
        <ProductForm categories={categories} />
        {/* create a table for products */}
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.price}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
