import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartItem, addToCart } from "./store/cartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface productParams {
  id: number;
  name: string;
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
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="neu-card flex flex-col justify-between w-full h-full p-4 relative"
    >
      <Link to={`/product/${id}`} className="flex-grow flex flex-col">
        <div className="neu-inset rounded-2xl p-4 flex justify-center items-center mb-6 h-64 overflow-hidden mb-4 cursor-pointer">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            alt={name} 
            src={imageUrl} 
            className="h-full object-contain drop-shadow-md mix-blend-multiply" 
          />
        </div>

        <div className="mb-4">
          <p className="text-xl lg:text-2xl font-bold text-slate-700 leading-tight hover:text-[#E76F51] transition-colors cursor-pointer">{name}</p>
        </div>
      </Link>

      <div className="flex flex-row items-center justify-between mt-auto">
        <p className="text-2xl lg:text-3xl font-extrabold text-[#E76F51]">
          &#8377;{price}
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="neu-button bg-[#E76F51] p-3 rounded-full flex justify-center items-center text-white hover:bg-[#d46549] z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCartHandler({ id: id, name, price, imageUrl, quantity: 1 });
          }}
        >
          <AiOutlineShoppingCart className="text-2xl" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
