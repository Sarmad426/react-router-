import React from "react";
import { Link, useParams } from "react-router-dom";
import productData from "./data";
function SingleProduct() {
  const { productId } = useParams();
  const product = productData.find((product) => product.title === productId);
  const { title, img } = product;
  return (
    <div className="product-page">
      <img src={img} alt="Logo" />
      <h3> {title}</h3>
      <Link to="/products" className="btn">
        Back to products
      </Link>
    </div>
  );
}
export default SingleProduct;
