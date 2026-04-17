import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart, AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";

import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { productData } from "../data/product";
import { addToCart } from "./store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const product = productData.find((p) => p.id === parseInt(id || "0"));

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product?.sizes ? product.sizes[0] : null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product?.colors ? product.colors[0] : null
  );

  if (!product) {
    return (
      <div className="bg-[#F2EFE9] min-h-screen font-sans text-slate-700 flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Product Not Found</h1>
            <Link to="/" className="neu-button px-6 py-3 rounded-full text-[#E76F51] font-bold">
              Return to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
      })
    );
    toast.success("Item Added to cart");
  };

  return (
    <div className="bg-[#F2EFE9] min-h-screen font-sans text-slate-700 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-500 hover:text-[#E76F51] transition-colors mb-8 font-semibold"
        >
          <AiOutlineArrowLeft className="mr-2" />
          Back to Shop
        </Link>

        <div className="neu-flat rounded-3xl p-6 lg:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Image Gallery Column */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="neu-inset rounded-3xl p-6 md:p-12 h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden w-full mix-blend-multiply"
              >
                <img 
                  src={`/${product.imageUrl}`} 
                  alt={product.title} 
                  className="max-h-full max-w-full drop-shadow-2xl object-contain"
                />
              </motion.div>
            </div>

            {/* Details Column */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-sm font-bold tracking-widest text-[#E76F51] uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-500 text-lg">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <AiFillStar key={star} className={star <= Math.round(product.rating) ? "" : "text-slate-300"} />
                    ))}
                  </div>
                  <span className="text-slate-500 font-medium tracking-wide">
                    {product.rating} / 5.0
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <h2 className="text-4xl font-extrabold text-[#E76F51]">
                    &#8377;{product.price}
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-10 text-lg text-slate-600 leading-relaxed font-medium">
                  {product.description}
                </div>

                {/* Options Layout */}
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  {/* Sizes */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="flex-1">
                      <h3 className="text-sm uppercase font-bold tracking-wider text-slate-500 mb-4">Select Size</h3>
                      <div className="flex flex-wrap gap-4">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-12 h-12 rounded-full font-bold transition-all text-sm flex items-center justify-center ${
                              selectedSize === size
                                ? "neu-inset text-[#E76F51]"
                                : "neu-button text-slate-600 hover:text-[#E76F51]"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex-1">
                      <h3 className="text-sm uppercase font-bold tracking-wider text-slate-500 mb-4">Select Color</h3>
                      <div className="flex gap-4">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-10 h-10 rounded-full transition-all flex items-center justify-center ${
                              selectedColor === color ? "neu-inset scale-110" : "neu-flat hover:scale-105"
                            }`}
                          >
                            <div 
                              className="w-6 h-6 rounded-full border border-slate-300/30"
                              style={{ backgroundColor: color }}
                            ></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Add to Cart Area */}
                <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className="flex-grow neu-button bg-[#E76F51] text-white rounded-2xl py-5 px-8 text-xl font-bold flex items-center justify-center gap-4 hover:bg-[#d46549] transition-colors"
                  >
                    <AiOutlineShoppingCart className="text-3xl" />
                    Add to Cart
                  </motion.button>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
