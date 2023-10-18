import { GiHamburgerMenu } from "react-icons/gi";
import Journal from "./Journal";
import { journalData } from "../data/journal";
import Products from "./Products";
import { Parallax } from "react-parallax";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-between my-[20px] mx-[20px]">
        <h1 className="product_header font-medium text-[25px]  ">Products</h1>

        <GiHamburgerMenu className="text-[30px]" />
      </div>

      {/* Desktop modern parallax scrolling */}
      <Parallax
        bgImage="src/assets/hero-image.jpg"
        strength={500}
        className="hidden md:block"
      >
        <div style={{ height: 370 }}>
          <div>
            <h1 className="flex justify-center items-center h-[370px] text-center text-[57px] inter font-extrabold ">
              Shop <br className="md:hidden" /> Page
            </h1>
          </div>
        </div>
      </Parallax>

      {/* Shop Banner Mobile */}
      <div className="w-full md:hidden h-[370px] bg-[#dbd2d7] banner">
        <h1 className="flex justify-center items-center h-[370px] text-center text-[57px] inter font-extrabold ">
          Shop <br className="md:hidden" /> Page
        </h1>
      </div>

      <div className="w-full  mt-[40px] mx-auto">
        <ul className="flex flex-row overflow-x-auto justify-evenly space-x-8 h-[50px] category text-gray-500 mx-[25px]">
          <li>All</li>
          <li>Shoes</li>
          <li>Shirts</li>
          <li>Hoddies</li>
        </ul>
      </div>
      <Products />

      <div className="container md:w-full">
        <h1 className="inter font-extrabold text-[35px] text-center mb-[20px] px-4">
          Our Journal
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 md:justify-evenly px-5 md:w-full">
          {journalData.map((jData) => (
            <div key={jData.id}>
              <Journal
                title={jData.title}
                category={jData.category}
                imageUrl={jData.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
