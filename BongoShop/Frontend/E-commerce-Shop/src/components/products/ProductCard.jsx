import "./ProductCard.css";

export const ProductCard = ({ product, AddToCart }) => {
  const handleCart = () => {
    AddToCart(product);
  };
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{`Tk- ${product.price}`}</p>
      <h4>{product.quantity}</h4>
      <button onClick={handleCart}>Add</button>
    </div>
  );
};
