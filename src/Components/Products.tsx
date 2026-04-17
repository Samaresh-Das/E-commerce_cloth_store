import { useState } from "react";
import { productData } from "../data/product";
import Card from "./Card";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

interface ProductsProps {
  selectedCategory: string;
}

const Products = ({ selectedCategory }: ProductsProps) => {
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  const getPriceFilterData = (price: number) => {
    setSelectedPrice(price);
  };

  // Filter the products based on the selected category and price
  const filteredProducts = productData.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const isPriceMatch = selectedPrice === 0 || product.price <= selectedPrice;

    return isCategoryMatch && isPriceMatch;
  });
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 mt-8">
      <div className="w-full lg:w-1/4">
        <Filter getPriceFilterData={getPriceFilterData} />
      </div>
      <div className="w-full lg:w-3/4">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((pData) => (
              <motion.section 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={pData.id}
                className="w-full flex"
              >
                <Card
                  id={pData.id}
                  price={pData.price}
                  name={pData.title}
                  imageUrl={pData.imageUrl}
                />
              </motion.section>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
