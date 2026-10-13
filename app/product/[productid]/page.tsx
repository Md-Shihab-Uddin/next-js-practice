import { products } from "../../data/product";
import "./productid.css";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const { productid } = await params;

  const product = products.find(
    (product) => product.id === Number(productid)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

return (
  <div className="productPage">
    <div className="productInfo">

      <h1>{product.name}</h1>

      <p>Brand: {product.brand}</p>
      <p>Display: {product.display}</p>
      <p>Processor: {product.processor}</p>
      <p>RAM: {product.ram}</p>
      <p>Storage: {product.storage}</p>
      <p>Camera: {product.camera}</p>
      <p>Battery: {product.battery}</p>
      <p>Operating System: {product.operatingSystem}</p>
      <p>Connectivity: {product.connectivity}</p>

      <h2>Ratings</h2>

      <div className="rating">
        <p>TechRadar: {product.ratings.techRadar}</p>
        <p>Toms Guide: {product.ratings.tomsGuide}</p>
        <p>GSMArena: {product.ratings.gsmArena}</p>
      </div>

      <h2>Review</h2>
      <p>{product.reviewSummary}</p>

      <h2>Good For</h2>

      <ul>
        {product.buyingConsiderations.goodFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Concerns</h2>

      <ul>
        {product.buyingConsiderations.concerns.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </div>
  </div>
);
}