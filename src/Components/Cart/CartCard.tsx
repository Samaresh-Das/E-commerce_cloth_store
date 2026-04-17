import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

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
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -30 }}
      className="neu-flat rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="flex items-center w-full md:w-2/5 mb-4 md:mb-0">
        <div className="neu-inset rounded-xl p-2 h-24 w-24 flex-shrink-0 flex items-center justify-center mix-blend-multiply overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="max-h-full max-w-full drop-shadow-md object-contain"
          />
        </div>
        <div className="ml-6">
          <h1 className="text-xl font-bold text-slate-800 leading-tight">{name}</h1>
          <span className="text-[#E76F51] font-semibold text-lg md:hidden mt-1 block">&#8377;{price}</span>
        </div>
      </div>

      <div className="flex flex-row w-full md:w-3/5 items-center justify-between">
        
        <div className="neu-inset p-1 rounded-full flex items-center">
          <button
            className="neu-button rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-slate-600 hover:text-[#E76F51] transition-colors"
            onClick={() => handleDecreaseQuantity(id)}
          >
            -
          </button>
          <span className="w-8 md:w-12 text-center font-extrabold text-slate-800">{quantity}</span>
          <button
            className="neu-button rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-slate-600 hover:text-[#E76F51] transition-colors"
            onClick={() => handleIncreaseQuantity(id)}
          >
            +
          </button>
        </div>

        <div className="text-right">
          <h1 className="text-slate-800 text-lg md:text-xl font-extrabold">
            &#8377;{(price * quantity).toFixed(2)}
          </h1>
        </div>

        <div className="ml-2">
          <button 
            className="neu-button p-3 rounded-full text-slate-400 hover:text-red-500 transition-colors"
            onClick={() => handleRemoveItem(id)}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartCard;
