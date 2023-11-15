import { useState, useEffect, useRef } from "react";
import { type Product as ProductProps } from "../../store/store-shop";
import "./product.css";

const Product = ({
  id,
  name,
  description,
  features,
  price,
  images,
}: ProductProps) => {
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
      <h3>{name}</h3>
      <h4>{description}</h4>
      {features}
      <p>{price}</p>
    </div>
  );
};

export default Product;
