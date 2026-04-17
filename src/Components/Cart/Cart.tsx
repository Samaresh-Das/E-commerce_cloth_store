import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../Footer";
import Navbar from "../Navbar";
import CartCard from "./CartCard";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../store/cartSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId: number) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let total = 0;
  for (let item of cartItems) {
    total += item.price * item.quantity;
  }

  //Razorpay payment gateway
  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount: number) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }
    const razorWindow: any = window; //important for ts compiler
    return new Promise((resolve) => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        currency: "INR",
        amount: amount * 100,
        name: "UrbanAura",
        description: "Thanks for purchasing",
        handler: function (response: any) {
          resolve(response.razorpay_payment_id);
        },
        prefill: { name: "UrbanAura" },
      };
      const paymentObject = new razorWindow.Razorpay(options);
      paymentObject.open();
    });
  };

  const paymentHandler = async (amount: number) => {
    const res = await displayRazorpay(amount);
    if (res) {
      console.log("Payment ID:", res);
      handleClearCart();
    }
  };

  return (
    <div className="bg-[#F2EFE9] min-h-screen font-sans text-slate-700 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-12">
        
        {/* Cart Items Section */}
        <div className="lg:w-2/3">
          <div className="neu-flat rounded-3xl p-8 mb-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-extrabold text-slate-800">Shopping Cart</h1>
              <span className="text-lg font-bold text-[#E76F51]">{cartItems.length} Items</span>
            </div>
            
            <div className="hidden md:flex justify-between text-slate-500 uppercase text-sm font-bold tracking-wider mb-6 pb-4 border-b border-slate-300">
              <div className="w-2/5">Product Details</div>
              <div className="flex w-3/5 justify-between">
                <div>Quantity</div>
                <div>Subtotal</div>
                <div></div>
              </div>
            </div>

            <div className="space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <CartCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    imageUrl={item.imageUrl}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleRemoveItem={handleRemoveItem}
                  />
                ))}
              </AnimatePresence>
              
              {cartItems.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-slate-400"
                >
                  <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  <p className="text-xl font-bold">Your cart is completely empty.</p>
                </motion.div>
              )}
            </div>

            <Link
              to="/"
              className="mt-8 inline-flex items-center text-sm font-bold text-[#E76F51] hover:text-[#d46549] transition-colors"
            >
              <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-1/3">
          <div className="neu-flat rounded-3xl p-8 sticky top-12">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-8 border-b border-slate-300 pb-4">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-semibold uppercase text-sm tracking-wider">Subtotal</span>
              <span className="font-bold text-lg">&#8377;{total.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-500 font-semibold uppercase text-sm tracking-wider">Shipping</span>
              <span className="font-bold text-lg text-green-600">Free</span>
            </div>

            <div className="border-t border-slate-300 pt-6 mb-8 flex justify-between items-center">
              <span className="text-xl font-bold text-slate-800">Total Cost</span>
              <span className="text-2xl font-extrabold text-[#E76F51]">&#8377;{total.toFixed(2)}</span>
            </div>

            <button
              disabled={cartItems.length === 0}
              className={`w-full py-4 px-6 rounded-xl text-lg font-bold transition-all ${
                cartItems.length > 0 
                  ? "neu-button bg-[#E76F51] text-white hover:bg-[#d46549]" 
                  : "neu-inset text-slate-400 cursor-not-allowed"
              }`}
              onClick={() => paymentHandler(total)}
            >
              Checkout
            </button>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Cart;
