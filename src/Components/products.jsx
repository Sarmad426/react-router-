import React from "react";
import { Link } from "react-router-dom";
import productData from "./data";
class Products extends React.Component {
  render() {
    return (
      <div>
        <div className="products">
          {productData.map((product) => {
            return (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <Link to={`/products/${product.title}`} className="link">
                  more info
                </Link>
              </div>
            );
          })}
        </div>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    );
  }
}
export default Products;
