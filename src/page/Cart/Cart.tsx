import { useContext } from "react";
import { StoreContext } from "../../store/store-shop";
import Button from "../../components/Button/Button";

import "./cart.css";
const Cart = () => {
  const { cart, deleteProduct } = useContext(StoreContext)!;
  const sum = cart.reduce((accumulator, object) => {
    return accumulator + +object.price;
  }, 0);

  return (
    <div className="cart-wrap">
      {!cart.length ? null : (
        <div className="cart-total">
          <p>Total: {sum}</p>
        </div>
      )}
      {!cart.length ? (
        <h2 className="no-cart-title">No items in cart</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-img-wrap">
              <picture>
                <img
                  src={item.images[0]}
                  alt={item.description}
                  className="cart-image"
                />
              </picture>
            </div>
            <div className="cart-info">
              <h2 className="cart-title">{item.name}</h2>
              <h3 className="cart-description">{item.description}</h3>
              <h4 className="cart-price">$ {item.price}</h4>
              <div className="delete-button">
                <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
