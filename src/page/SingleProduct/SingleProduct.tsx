import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../store/store-shop";

import "./single-product.css";

const SingleProduct = () => {
  const { id } = useParams();
  const storeCtx = useContext(StoreContext)!;

  const singleProduct = storeCtx.products.filter((item) => item.id === id);

  console.log(
    "single Product",
    singleProduct[0].name,
    singleProduct[0].images[0]
  );

  return (
    <div className="single-product-wrap">
      <div className="single-product-image-wrap">
        <picture>
          <img
            src={singleProduct && singleProduct[0].images[0]}
            alt={singleProduct && singleProduct[0].description}
            className="single-product-image"
          />
        </picture>
      </div>
      <h2 className="single-product-title">
        {singleProduct && singleProduct[0].name}
      </h2>
      <h3 className="single-product-description">
        {singleProduct && singleProduct[0].description}
      </h3>
      <p className="single-product-keywords">
        <span>Keywords:</span> {singleProduct && singleProduct[0].keywords}
      </p>
      <p className="single-product-price">
        <span>Price:</span> $ {singleProduct && singleProduct[0].price}
      </p>
    </div>
  );
};

export default SingleProduct;
