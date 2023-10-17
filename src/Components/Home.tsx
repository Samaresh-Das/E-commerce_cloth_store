import { GiHamburgerMenu } from "react-icons/gi";
import Card from "./Card";
import { productData } from "../data/product";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-between my-[20px] mx-[20px]">
        <h1 className="product_header font-medium text-[25px]  ">Products</h1>

        <GiHamburgerMenu className="text-[30px]" />
      </div>

      {/* Shop Banner */}
      <div className="w-full h-[370px] bg-[#dbd2d7]">
        <h1 className="flex justify-center items-center h-[370px] text-[30px]">
          SHOP PAGE
        </h1>
      </div>

      <div className="w-full  mt-[40px]">
        <ul className="flex whitespace-nowrap  overflow-x-auto space-x-8 h-[50px] mx-[25px] category text-gray-500">
          <li>All</li>
          <li>Shoes</li>
          <li>Shirts</li>
          <li>Pants</li>
          <li>Hoddies</li>
          <li>Outer</li>
          <li>Jackets</li>
          <li>Accessories</li>
        </ul>
      </div>

      <div className="mt-[20px] mx-[30px]">
        {productData.map((pData) => (
          <section key={pData.id}>
            <div className="mx-auto w-full max-w-7xl py-16 md:px-10 md:py-24 lg:py-32">
              <div className="flex flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card
                    title={pData.title}
                    price={pData.price}
                    imageUrl={pData.imageUrl}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
