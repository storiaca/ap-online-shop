import { useState } from "react";
import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Cart />
    </>
  );
}

export default App;
