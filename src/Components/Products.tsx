import { useState } from "react";
import { productData } from "../data/product";
import Card from "./Card";
import Filter from "./Filter";

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
    <div className="block lg:grid lg:grid-cols-4">
      <div>
        <Filter getPriceFilterData={getPriceFilterData} />
      </div>
      <div className="lg:col-span-3">
        <div className="mt-[20px] mx-[30px] md:flex md:flex-row md:flex-wrap">
          {filteredProducts.map((pData) => (
            <section key={pData.id}>
              <div className="mx-auto w-full md:w-auto md:px-5 py-4 md:py-12 lg:py-12">
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                  <Card
                    title={pData.title}
                    price={pData.price}
                    imageUrl={pData.imageUrl}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
