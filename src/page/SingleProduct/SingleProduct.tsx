import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../store/store-shop";

const SingleProduct = () => {
  const { id } = useParams();
  const storeCtx = useContext(StoreContext)!;

  console.log(id);

  const singleProduct = storeCtx.products.filter((item) => item.id === id);

  console.log("single Product", singleProduct[0].name);

  return <div className="single-product-wrap">SingleProduct {id}</div>;
};

export default SingleProduct;
