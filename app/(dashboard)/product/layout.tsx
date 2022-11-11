import MyModal from "@/components/modal";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-between h-full w-full">
        <h1>Product Page</h1>
        <MyModal />
      </div>
      <div>
        <h1 className="font semibold text-2xl">Add Product</h1>
      </div>
      <div>{children}</div>
    </>
  );
}
