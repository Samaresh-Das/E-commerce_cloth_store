import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const showMenuDropdown = () => {
    setShowDropdown(true);
  };
  const hideMenuDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <div className="relative">
      <Link to="/">
        <h1 className="title text-center font-bold text-[34px]">UrbanAura</h1>
      </Link>
      <div className=" text-[30px] md:text-[40px]">
        <div
          className="absolute right-3  md:right-12 top-2"
          onMouseEnter={showMenuDropdown}
        >
          {/* If user is signedin it will show user button component coming directly from clerk. Clerk provides such a handy way of authentication based changes */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {showDropdown && (
              <div
                onMouseLeave={hideMenuDropdown}
                id="dropdownHover"
                className=" absolute right-0 top-[41px] bg-white divide-y divide-gray-100 shadow w-44 border-2 rounded-md border-black"
              >
                <ul
                  className="text-[18px] text-center"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <Link to="/cart" className="block py-2 ">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </SignedIn>
        </div>

        {/* if user is not authenticated then show the default */}
        <SignedOut>
          <RiAccountCircleLine
            onMouseEnter={showMenuDropdown}
            className="absolute right-3  md:right-12 top-2"
          />
          {showDropdown && (
            <div
              onMouseLeave={hideMenuDropdown}
              id="dropdownHover"
              className=" absolute right-0 bg-white divide-y divide-gray-100 shadow w-44 border-2 rounded-md border-black"
            >
              <ul
                className="text-[18px] text-center"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <Link to="/auth" className="block py-2 ">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
