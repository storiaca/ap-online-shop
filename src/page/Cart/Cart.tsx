import { useContext } from "react";
import { StoreContext } from "../../store/store-shop";
import Button from "../../components/Button/Button";

import "./cart.css";
const Cart = () => {
  const { cart, deleteProduct } = useContext(StoreContext)!;

  // let totalPrice = cart.map((item) => {
  //   item.price;
  // });

  return (
    <div className="cart-wrap">
      {!cart.length ? (
        <h2 className="no-cart-title">No items in cart</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h2 className="cart-title">{item.name}</h2>
            <h3 className="cart-description">{item.description}</h3>
            <h4 className="cart-price">{item.price}</h4>
            <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
          </div>
        ))
      )}

      {!cart.length ? null : <aside className="cart-sidebar">Sidebar</aside>}
    </div>
  );
};

export default Cart;
