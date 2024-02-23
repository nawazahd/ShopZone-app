import { FaPlus } from "react-icons/fa";
import { CartItem } from "../types/types";
// import svgimg1 from "../../frontend/src/uploads/0f0898a0-bcc2-485b-8820-87c6e203d3ec.svg";
//import { server } from "../redux/store";

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
 
  let imgSrc;
  switch (photo) {
    case "uploads/12c55636-f48c-4388-9213-cfe9f7c4c4b9.jpg":
      imgSrc = "/src/assets/12c55636-f48c-4388-9213-cfe9f7c4c4b9.jpg";
      break;
    case "uploads/575e1515-50a9-47ea-b59b-b5ab855fba63.jpg":
      imgSrc = "/src/assets/575e1515-50a9-47ea-b59b-b5ab855fba63.jpg";
      break;
    case "uploads/c0bdce9b-b343-4591-ba24-ccd71ef5dcda.jpg":
      imgSrc = "/src/assets/c0bdce9b-b343-4591-ba24-ccd71ef5dcda.jpg";
      break;
    case "uploads/c6a474e8-0943-4f67-a877-b8b5794a81c5.jpg":
      imgSrc = "/src/assets/c6a474e8-0943-4f67-a877-b8b5794a81c5.jpg";
      break;
    case "uploads/0c0187e5-a39c-41b2-beb8-296bffb6b022.jpg":
      imgSrc = "/src/assets/c0bdce9b-b343-4591-ba24-ccd71ef5dcda.jpg";
      break;
    // Add more cases for additional images if needed
    default:
      imgSrc = "/src/assets/default-image.jpg"; // Default image in case none of the conditions match
      break;
  }
  

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
