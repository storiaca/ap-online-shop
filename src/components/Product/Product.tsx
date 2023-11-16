import { useState, useEffect, useRef } from "react";
import { type Product as ProductProps } from "../../store/store-shop";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import "./product.css";

const Product = ({ id, name, description, price, images }: ProductProps) => {
  //console.log("images", images);
  //const [pictures, setPictures] = useState<string[]>([]);
  //const picturesRef = useRef(null);
  // useEffect(() => {
  //   setPictures(images);
  // }, []);

  //console.log(pictures);

  return (
    <div className="product-card" id={id}>
      <div>
        {/* {images.map((image, index) => (
            <img src={image[index]} alt="Image" />
          ))} */}
        {/* <img src={pictures[0]} alt="Image" /> */}
      </div>
      <h3>
        <Link to={`/product/${id}`}>{name}</Link>
      </h3>
      <h4>{description}</h4>
      <p>{price}</p>
      <Button>Add to cart</Button>
    </div>
  );
};

export default Product;
