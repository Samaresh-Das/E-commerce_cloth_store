import React from "react";
import { productData } from "../data/product";
import Card from "./Card";
import Filter from "./Filter";

const Products = () => {
  return (
    <div className="block lg:grid lg:grid-cols-4">
      <div>
        <Filter />
      </div>
      <div className="lg:col-span-3">
        <div className="mt-[20px] mx-[30px] md:flex md:flex-row md:flex-wrap">
          {productData.map((pData) => (
            <section key={pData.id}>
              <div className="mx-auto w-full md:w-auto md:px-10 py-4 md:py-12 lg:py-12">
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
