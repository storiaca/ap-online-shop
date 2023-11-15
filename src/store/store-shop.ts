import { createContext, ReactNode, useContext } from "react";

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

// const ShopContext = createContext<>(null);
