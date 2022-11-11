import ProductForm from "@/components/product-form";

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

export default async function ProductPage() {
  // const categories = await getCategories();
  // const products = await getProducts();
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <>
      <div>
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
                <td>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(product.price)}
                </td>
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
