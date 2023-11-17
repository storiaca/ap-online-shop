import {
  createContext,
  type ReactNode,
  useReducer,
  useState,
  useEffect,
} from "react";
import { produce } from "immer";

import { productsData } from "../data/productsData";

export type Product = {
  id: string;
  name: string;
  description: string;
  features: string;
  price: string;
  salePrice?: string;
  keywords: string;
  url: string;
  category: string;
  subcategory: string;
  images: string[];
};

export type Cart = {
  id: string;
  name: string;
  description: string;
  price: string | number;
  images: string[];
};

type StoreData = {
  products: Product[];
  cart: Cart[];
};

const initialState: StoreData = {
  products: [],
  cart: [],
};

type StoreContextValue = StoreData & {
  deleteProduct: (id: string) => void;
  addProduct: (item: Cart) => void;
};

export const StoreContext = createContext<StoreContextValue | null>(null);

type StoreContextProviderProps = {
  children: ReactNode;
};

type AddProductAction = {
  type: "ADD_PRODUCT";
  payload: Cart;
};

type DeleteProductAction = {
  type: "DELETE_PRODUCT";
  payload: string;
};

type Action = AddProductAction | DeleteProductAction;

function storeReducer(state: StoreData, action: Action): StoreData {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          images: action.payload.images,
        },
      ],
    };
  }
  if (action.type === "DELETE_PRODUCT") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  return state;
}
export default function StoreContextProvider({
  children,
}: StoreContextProviderProps) {
  const [storeState, dispatch] = useReducer(storeReducer, initialState);

  const [products, setProducts] = useState<Product[]>([]);
  const { items } = productsData?.products?.data;

  useEffect(() => {
    setProducts(items);
  }, []);

  const ctx: StoreContextValue = {
    products: products,
    cart: storeState.cart,
    deleteProduct(id) {
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    },
    addProduct(item) {
      dispatch({ type: "ADD_PRODUCT", payload: item });
    },
  };

  return <StoreContext.Provider value={ctx}>{children}</StoreContext.Provider>;
}
