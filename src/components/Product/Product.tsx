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
  const { addProduct, cart } = useContext(StoreContext)!;
  //console.log("images", images);
  //const [pictures, setPictures] = useState<string[]>([]);
  //const picturesRef = useRef(null);
  // useEffect(() => {
  //   setPictures(images);
  // }, []);

  console.log({ cart });

  return (
    <div className="product-card">
      <div>
        {/* {images &&
          images.map((image, index) => <img src={image[index]} alt="Image" />)} */}
        {/* // <img src={image[index][0]} alt="Image" /> */}
        {/* {images && (
          <img
            src={images.reduce((item, acc) => console.log(item), {})}
            alt="Image"
          />
        )} */}
      </div>
      <h3>
        <Link to={`/product/${id}`}>{name}</Link>
      </h3>
      <h4>{description}</h4>
      <p>{price}</p>
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
  );
};

export default Product;
