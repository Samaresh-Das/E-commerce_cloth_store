import { AiOutlineClose } from "react-icons/ai";

interface cartParams {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}

const CartCard = ({
  id,
  name,
  imageUrl,
  quantity,
  price,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
}: cartParams) => {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-4 mt-[50px]">
        <div className="flex flex-col md:flex-row">
          <img
            src={imageUrl}
            alt={name}
            className="mx-5 md:mx-0 md:w-[160px]"
          />
          <div className="ml-[20px] mt-[20px] text-[20px] inter font-extrabold">
            <h1>{name}</h1>
            <h2 className="mt-[40px] text-[#6995B1]">&#8377;{price}</h2>
          </div>
        </div>

        <div className="flex flex-row space-x-3 mt-[20px] mx-5 md:mx-0">
          <div>
            <button
              className="p-3 border-2"
              onClick={() => handleIncreaseQuantity(id)}
            >
              +
            </button>
          </div>
          <div className="p-3">{quantity}</div>
          <div>
            <button
              className="p-3 border-2"
              onClick={() => handleDecreaseQuantity(id)}
            >
              -
            </button>
          </div>
        </div>

        <div className="mt-[20px] md:block flex flex-row justify-evenly md:justify-normal">
          <h1 className="md:hidden text-[25px] inter font-extrabold">
            Subtotal
          </h1>
          <h1 className="text-[#6995B1] text-[20px] font-extrabold mx-5 md:mx-0">
            &#8377;{(price * quantity).toFixed(2)}
          </h1>
        </div>
        <div className="mt-[20px] mx-auto md:mx-0 text-[40px] ">
          <button onClick={() => handleRemoveItem(id)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <hr className="mt-9" />
    </>
  );
};

export default CartCard;
