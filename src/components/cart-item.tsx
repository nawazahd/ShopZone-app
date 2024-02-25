import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { photoMap } from "../components/PhotoCases"; // Importing photoMap
import { CartItem } from "../types/types";

type CartItemProps = {
  cartItem: CartItem;
  incrementHandler: (cartItem: CartItem) => void;
  decrementHandler: (cartItem: CartItem) => void;
  removeHandler: (id: string) => void;
};

const CartItemComponent = ({
  cartItem,
  incrementHandler,
  decrementHandler,
  removeHandler,
}: CartItemProps) => {
  const { productId, name, price, quantity } = cartItem;
  const photoURL = photoMap[cartItem.photo]; // Retrieving photo URL from photoMap

  return (
    <div className="cart-item">
      <img src={photoURL} alt={name} /> {/* Using photoURL instead of photo */}
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>

      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItemComponent;
