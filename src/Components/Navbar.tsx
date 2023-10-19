import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="relative">
      <h1 className="title text-center font-bold text-[34px]">UrbanAura</h1>
      <div className="absolute right-3 top-2 text-[30px] md:text-[40px]">
        <RiAccountCircleLine />
      </div>
    </div>
  );
};

export default Navbar;
