import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { type Product as ProductType } from "../../store/store-shop";
import { productsData } from "../../data/productsData";

import "./products.css";
const Products = () => {
  const [products, setProducts] = useState<ProductType[] | null>([]);

  useEffect(() => {
    setProducts(productsData?.products?.data?.items);
  }, []);

  console.log(products);

  return (
    <div className="products-wrap">
      <h2>Products</h2>
      {products &&
        products.map((item) => (
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
  );
};

export default Products;
