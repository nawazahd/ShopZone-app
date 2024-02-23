import { FaPlus } from "react-icons/fa";
import { CartItem } from "../types/types";
// import svgimg1 from "../../frontend/src/uploads/0f0898a0-bcc2-485b-8820-87c6e203d3ec.svg";
import { server } from "../redux/store";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
 


  return (
    <div className="product-card">
      <img src={`/src/assets/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler({ productId, price, name, photo, stock, quantity: 1 })
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
