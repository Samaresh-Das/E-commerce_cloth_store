import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartItem, addToCart } from "./store/cartSlice";
import { useDispatch } from "react-redux";

interface productParams {
  id: number;
  name: string;
  //   category: string;
  price: number;
  imageUrl: string;
}

const Card = ({ id, name, price, imageUrl }: productParams) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item: CartItem) => {
    dispatch(addToCart(item));
    toast.success("Item Added to cart");
  };

  return (
    <div className="flex max-w-full flex-col gap-1 rounded-md">
      <img alt={name} src={imageUrl} className="h-96 w-full object-contain" />

      <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
        <div className="mb-4">
          <p className="text-[25px] font-bold md:text-2xl">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-start max-[991px]:flex-col lg:items-center">
            <p className="text-[32px] text-[#6995B1] ">&#8377; {price}</p>
          </div>
          <div className="items-end">
            <button
              onClick={() =>
                addToCartHandler({ id: id, name, price, imageUrl, quantity: 1 })
              }
            >
              <AiOutlineShoppingCart className="text-[35px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
