import { useState } from "react";
import { ProductCard } from "./ProductCard";
import "./Products.css";
export const Products = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "phone",
      price: 70000,
      quantity: 10,
    },
    {
      id: 2,
      name: "Computer",
      price: 70000,
      quantity: 10,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 70000,
      quantity: 10,
    },
  ];

  const productExist = (productId) =>
    cart.some((product) => product.id === productId);
  const addToCart = (product) => {
    if (productExist(product.id)) {
      alert("already in the cart");
      return;
    }
    setCart([...cart, product]);
  };
  const itemNumber = cart.length;

  return (
    <div className="product-card">
      <div>
        <h3>{`In Cart ${itemNumber}`}</h3>
      </div>
      <div className="product-items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            AddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};
