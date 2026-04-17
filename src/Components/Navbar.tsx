import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart);

  const showMenuDropdown = () => {
    setShowDropdown(true);
  };
  const hideMenuDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50 neu-flat rounded-2xl px-6 py-4 mb-8 flex justify-between items-center"
    >
      <Link to="/" className="outline-none">
        <h1 className="title text-center font-bold text-[34px] text-slate-700 hover:text-[#E76F51] transition-colors duration-300">
          UrbanAura
        </h1>
      </Link>
      <div className="text-[28px] md:text-[36px] flex items-center gap-4">
        
        {/* Dedicated Cart Icon (Mobile friendly) */}
        <Link to="/cart" className="relative flex items-center justify-center neu-button rounded-full p-3 cursor-pointer text-slate-600 hover:text-[#E76F51] transition-colors">
          <AiOutlineShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#E76F51] text-[12px] font-bold tracking-tighter text-white w-5 h-5 rounded-full flex items-center justify-center font-sans">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* User Auth Section */}
        <div
          className="relative flex items-center justify-center neu-button rounded-full p-2 cursor-pointer"
          onMouseEnter={showMenuDropdown}
          onMouseLeave={hideMenuDropdown}
        >
          {/* If user is signedin it will show user button component coming directly from clerk. Clerk provides such a handy way of authentication based changes */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-[60px] neu-flat rounded-xl w-44 z-50 overflow-hidden"
                >
                  <ul className="text-[18px] text-center font-medium">
                    <li>
                      <Link to="/cart" className="block py-3 hover:bg-[#E76F51] hover:text-white transition-colors duration-200">
                        Cart
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </SignedIn>

          {/* if user is not authenticated then show the default */}
          <SignedOut>
            <RiAccountCircleLine className="text-slate-600 hover:text-[#E76F51] transition-colors duration-300" />
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-[60px] neu-flat rounded-xl w-44 z-50 overflow-hidden"
                >
                  <ul className="text-[18px] text-center font-medium">
                    <li>
                      <Link to="/auth" className="block py-3 hover:bg-[#E76F51] hover:text-white transition-colors duration-200">
                        Login
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </SignedOut>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
