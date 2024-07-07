import bagLogo from "../assets/bagLogo.svg";
import { BsHandbag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  function logoutHandler() {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <nav className="flex justify-between py-4 items-center mb-3">
      <button className="rounded-full p-1 border border-gray-300">
        <RxHamburgerMenu />
      </button>

      <div onClick={() => navigate("/")} className="flex gap-2 cursor-pointer">
        <img className="w-4" src={bagLogo} alt="logo" />
        <h3 className="font-bold">bagstore</h3>
      </div>

      <div className="flex gap-4 md:gap-8">
        <button className="rounded-full p-1 border border-gray-300">
          <CiHeart />
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="rounded-full p-1 border border-gray-300"
        >
          <BsHandbag />
        </button>
        {token ? (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="rounded-full p-1 border border-gray-300">
              <IoPersonOutline />
            </button>
            {isHovered && (
              <div className="absolute right-0  bg-white border border-gray-300 rounded shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="rounded-full p-1 border border-gray-300"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
