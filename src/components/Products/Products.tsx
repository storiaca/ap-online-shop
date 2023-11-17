import { useContext } from "react";
import Product from "../Product/Product";
import { StoreContext } from "../../store/store-shop";

import "./products.css";
const Products = () => {
  const storeCtx = useContext(StoreContext)!;
  return (
    <div className="products-page">
      <h2>Products</h2>
      <div className="products-wrap">
        {storeCtx.products &&
          storeCtx.products.map((item, index) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              features={item.features}
              price={item.price}
              images={item.images}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
