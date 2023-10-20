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

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId: number) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
  };

  // Function to remove a specific item from the cart
  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  // Function to clear the entire cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let total = 0;

  for (let item of cartItems) {
    // Calculate the total
    total += item.price * item.quantity;
  }

  //Razorpay payment gateway
  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount: number) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const razorWindow: any = window; //important for ts compiler

    return new Promise((resolve) => {
      //resolving the promise
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        currency: "INR",
        amount: amount * 100,
        name: "UrbanAura",
        description: "Thanks for purchasing",
        handler: function (response: any) {
          resolve(response.razorpay_payment_id);
        },
        prefill: {
          name: "UrbanAura",
        },
      };

      const paymentObject = new razorWindow.Razorpay(options);
      paymentObject.open();
    });
  };

  const paymentHandler = async (amount: number) => {
    const res = await displayRazorpay(amount); //if the promise resolves then clear the cart only.
    if (res) {
      console.log("Payment ID:", res);
      handleClearCart();
    }
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className="py-[30px] bg-[#fafafa] w-full">
        <h1 className="text-center text-[57px] inter font-extrabold ">Cart</h1>
      </div>
      <div className="md:mx-[50px] w-full mt-[40px] ">
        {cartItems.length != 0 && (
          <div className="md:grid md:grid-cols-4 md:gap-4 text-[25px] inter font-extrabold ">
            <div className="text-center md:text-left">Products</div>
            <div className="hidden md:block">Quantity</div>
            <div className="hidden md:block">Subtotal</div>
          </div>
        )}
        {cartItems.map((item) => (
          <CartCard
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
        {cartItems.length === 0 && (
          <p className="my-5 text-[18px] inter font-extrabold text-[#8D8D8D] text-center">
            No Items in cart
          </p>
        )}
      </div>

      <div className="mt-[20px]  mx-[50px]">
        <h1 className="text-[50px] inter font-extrabold ">Cart Totals</h1>
        <div className="flex flex-row space-x-16">
          <h2 className="my-5 text-[18px] inter font-extrabold text-[#8D8D8D]">
            Total:
          </h2>
          <h2 className="my-5 text-[18px] inter  text-[#6995B1]">
            {" "}
            &#8377;{total}
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-[50px] mt-[30px] mb-[60pxmd:] space-y-4 md:space-x-4 md:space-y-0 ">
        <Link
          to="/"
          className="py-[19px] px-[54px]  md:text-left text-center bg-black text-white inter text-[18px]"
        >
          Continue Shopping
        </Link>
        <button
          className="py-[19px] px-[54px] bg-black text-white inter text-[18px]"
          onClick={() => paymentHandler(total)}
        >
          Proceed to Checkout
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
