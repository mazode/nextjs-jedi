// Dynamic routes can be implemented in Nextjs by using '[]' in the folder name

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Product details of {productId}</h1>;
}
