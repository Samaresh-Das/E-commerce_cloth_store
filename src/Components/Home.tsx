import Journal from "./Journal";
import { journalData } from "../data/journal";
import Products from "./Products";
import { Parallax } from "react-parallax";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [hoverEffect, setHoverEffect] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Shoes", "Shirt", "Hoodie", "Pant"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Desktop modern parallax scrolling wrapped in Neumorphism */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block neu-flat rounded-3xl overflow-hidden mx-4"
      >
        <Parallax
          bgImage="assets/hero-image.jpg"
          strength={500}
        >
          <div style={{ height: 400 }}>
            <div className="flex justify-center items-center h-full bg-slate-900/40">
              <h1 className="text-center text-[57px] md:text-[72px] inter font-extrabold text-white tracking-wider drop-shadow-lg">
                Shop <span className="text-[#E76F51]">Style</span>
              </h1>
            </div>
          </div>
        </Parallax>
      </motion.div>

      {/* Shop Banner Mobile */}
      <div className="w-full md:hidden neu-flat rounded-3xl overflow-hidden mx-2 h-[300px] relative">
        <div className="absolute inset-0 banner bg-cover bg-center rounded-3xl"></div>
        <div className="absolute inset-0 bg-slate-900/30 flex justify-center items-center rounded-3xl">
          <h1 className="text-center text-[48px] inter font-extrabold text-white tracking-widest drop-shadow-md">
            Shop<br/><span className="text-[#E76F51]">Style</span>
          </h1>
        </div>
      </div>

      {/* filter the product list */}
      <div className="w-full mt-10 mx-auto px-4">
        <div className="flex flex-row md:justify-center overflow-x-auto space-x-4 md:space-x-8 py-4 px-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category 
                  ? "neu-inset text-[#E76F51]" 
                  : "neu-button text-slate-500 hover:text-[#E76F51]"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "Shirt" ? "Shirts" : category === "Pant" ? "Pants" : category}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Products selectedCategory={selectedCategory} />
      </motion.div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container md:w-full mx-auto pb-12"
      >
        <h1 className="inter font-extrabold text-[35px] text-center mb-8 text-slate-700">
          Our <span className="text-[#E76F51]">Journal</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center px-4 md:w-full">
          {journalData.map((jData) => (
            <div
              key={jData.id}
              className="flex-1 max-w-[400px] mx-auto w-full"
              onMouseEnter={() => setHoverEffect(jData.title)}
            >
              <Journal
                hoverProps={hoverEffect === jData.title}
                title={jData.title}
                category={jData.category}
                imageUrl={jData.imageUrl}
                onMouseEnter={() => setHoverEffect(jData.title)}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
