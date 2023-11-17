import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import Header from "./components/Header/Header";
import SingleProduct from "./page/SingleProduct/SingleProduct";
import StoreContextProvider from "./store/store-shop";
StoreContextProvider;
function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
