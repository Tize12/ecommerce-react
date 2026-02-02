import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>{item.name}</h2>
      <button onClick={() => addToCart(item)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
