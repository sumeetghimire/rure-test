import { IoLogoInstagram, IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-xl">
      <div className="flex flex-col lg:flex-row justify-between mb-6">
        <div className="mb-6 lg:mb-0 lg:mr-6">
          <h3 className="max-w-md mb-4 text-lg font-semibold">
            SUBSCRIBE TO OUR NEWSLETTER AND BE THE FIRST TO KNOW ABOUT THE
            LATEST RELEASES, OFFERS, AND NEWS FROM BAGSTORE.COM
          </h3>
          <div className="bg-gray-300 p-2 rounded-xl flex items-center">
            <input
              className="bg-gray-300 flex-1 p-2 rounded-lg focus:outline-none"
              type="email"
              placeholder="Enter your email here"
            />
            <IoIosArrowRoundForward size={24} />
          </div>
        </div>
        <div className="flex flex-wrap xs:px-24 justify-between flex-1 gap-8 sm:px-28 lg:px-56 md:px-36">
          <ul className="w-full sm:w-auto">
            <h4 className="mb-4 text-md font-bold">Menu</h4>
            <li className="text-sm mb-1">Men</li>
            <li className="text-sm mb-1">Women</li>
            <li className="text-sm mb-1">Children</li>
            <li className="text-sm mb-1">Brand</li>
            <li className="text-sm mb-1">New</li>
            <li className="text-sm mb-1">Popular</li>
          </ul>
          <ul className="w-full sm:w-auto">
            <h4 className="mb-4 text-md font-bold">Support</h4>
            <li className="text-sm mb-1">Shipping & Returns</li>
            <li className="text-sm mb-1">FAQs</li>
            <li className="text-sm mb-1">Help and Conditions</li>
            <li className="text-sm mb-1">About</li>
            <li className="text-sm mb-1">Contact</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="agreement" className="flex items-center text-sm">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            className="mr-2"
          />
          I have read and agree to the bagstore privacy policy
        </label>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex gap-3 mb-4 sm:mb-0">
          <img className="w-10" src="/logos/Mastercard.svg" alt="Mastercard" />
          <img className="w-10" src="/logos/PayPal.svg" alt="PayPal" />
          <img className="w-10" src="/logos/Visa.svg" alt="Visa" />
        </div>
        <div className="flex gap-3 mb-4 sm:mb-0">
          <IoLogoInstagram size={24} />
          <FaFacebookSquare size={24} />
          <FaWhatsappSquare size={24} />
        </div>
        <div>
          <button className=" bg-gray-100 border-2 border-gray-300 px-4 py-2 rounded-lg">
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
