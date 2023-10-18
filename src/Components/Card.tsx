import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface productParams {
  title: string;
  //   category: string;
  price: number;
  imageUrl: string;
}

const Card = ({ title, price, imageUrl }: productParams) => {
  const addToCartHandler = () => {
    toast.success("Item Added to cart");
  };

  return (
    <div className="flex max-w-full flex-col gap-1 rounded-md">
      <img alt={title} src={imageUrl} className="h-96 w-full object-contain" />

      <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
        <div className="mb-4">
          <p className="text-[25px] font-bold md:text-2xl">{title}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-start max-[991px]:flex-col lg:items-center">
            <p className="text-[32px] text-[#6995B1] ">${price}</p>
          </div>
          <div className="items-end" onClick={addToCartHandler}>
            <AiOutlineShoppingCart className="text-[35px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
