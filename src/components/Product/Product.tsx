import { Link } from "react-router-dom";

import { useContext } from "react";

import { StoreContext } from "../../store/store-shop";

type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string;
  images: string[];
};

import Button from "../Button/Button";
import "./product.css";

const Product = ({ id, name, description, price, images }: ProductProps) => {
  const { addProduct } = useContext(StoreContext)!;
  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        {images && (
          <Link to={`/product/${id}`}>
            <picture>
              <img
                src={images[0]}
                alt={description}
                className="product-card-image"
              />
            </picture>
          </Link>
        )}
      </div>
      <div className="product-card-text">
        <h3 className="product-card-title">
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <h4 className="product-card-description">{description}</h4>
        <p className="product-card-price">Price: $ {price}</p>
      </div>
      <div className="product-card-add-button">
        <Button
          onClick={() =>
            addProduct({
              id: id,
              name: name,
              description: description,
              price: +price,
              images: images,
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
