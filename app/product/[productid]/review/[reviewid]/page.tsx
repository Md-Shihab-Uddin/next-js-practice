export default async function ReviewPage({
  params,
}: {
  params: Promise<{
    productid: string;
    reviewid: string;
  }>;
}) {
  const { productid, reviewid } = await params;

  return (
    <div>
      <h1>Review Page</h1>

      <p>Product ID: {productid}</p>
      <p>Review ID: {reviewid}</p>
    </div>
  );
}