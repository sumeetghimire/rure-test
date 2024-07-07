import { IoIosArrowRoundForward } from "react-icons/io";

const CatalogInfo = () => {
  return (
    <div className="bg-gray-200 mt-6 rounded-xl">
      <div className="rounded-xl flex flex-col lg:flex-row justify-between p-10 mb-7 text-center lg:text-left">
        <div className="lg:ml-64 mb-4 lg:mb-0">
          <button className="flex items-center gap-4 px-4 py-2 bg-white rounded-3xl border-2 border-gray-300 transition-all duration-300 hover:bg-gray-100 lg:px-6 lg:py-2">
            <span className="mb-1 text-sm sm:text-base lg:text-lg">
              View all catalog
            </span>
            <IoIosArrowRoundForward />
          </button>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-[28rem]">
          <span className="ml-0 lg:ml-12">
            All our bags are stain & water resistant.
          </span>{" "}
          They look great, wear great, and will beautifully complement your life
          & style.
        </p>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img
            className="w-32 sm:w-40 md:w-44"
            src="/bedsheet.jpg"
            alt="Bag Image"
          />
          <h3 className="font-bold">Chelsea- sol</h3>
        </div>
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-center">20% off Coupon-Bag20.</span>
        </div>
        <div>
          <img
            className="w-32 sm:w-40 md:w-44"
            src="/bedsheet1.jpg"
            alt="Bag Image"
          />
          <h3 className="font-bold">Chelsea - Malibu</h3>
        </div>
      </div>
      <div className="rounded-xl flex flex-col lg:flex-row justify-between p-10 mb-7 text-center lg:text-left">
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-[28rem]">
          We are redefining handbags by using soft silicone, Tyvek & vegan
          leather - a unique combination of the most durable materials that
          exist.
        </p>
        <div className="lg:mr-64 mt-4 lg:mt-0">
          <button className="flex items-center gap-4 px-4 py-2 bg-white rounded-3xl border-2 border-gray-300 transition-all duration-300 hover:bg-gray-100 lg:px-6 lg:py-2">
            <span className="mb-1 text-sm sm:text-base lg:text-lg">
              View all catalog
            </span>
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogInfo;
