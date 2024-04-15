import { ReactNode, createContext, useState } from "react";
import { Product } from "../types/product";
import React from "react";

type ProductContextProps = {
  product: Product;
  setProduct: (product: Product) => void;
  cart: Product[];
  insertCart: (product: Product) => void;
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export const ProductContextProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    cost: 0,
  });

  const cart: Product[] = [];

  const insertCart = (product: Product) => {
    cart.push(product);
    console.log(cart);
  };

  return (
    <ProductContext.Provider value={{ product, setProduct, cart, insertCart }}>
      {children}
    </ProductContext.Provider>
  );
};
