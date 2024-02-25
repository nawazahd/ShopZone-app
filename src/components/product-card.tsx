import { FaPlus } from "react-icons/fa";
import { CartItem } from "../types/types";
//import { server } from "../redux/store";
import { photoMap } from "./PhotoCases";

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
  const imgSrc = photoMap[photo] || "https://img.hotimg.com/0c0187e5-a39c-41b2-beb8-296bffb6b022."; // Default image
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} />
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