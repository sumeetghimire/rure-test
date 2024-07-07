import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Hero = () => {
  return (
    <div
      style={{
        background: "url(./hero-background.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-gray-100 rounded-3xl p-4 md:py-8 lg:py-10 lg:px-12 overflow-hidden md:relative min-h-[300px] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh]"
    >
      <div className="flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row gap-6 md:justify-between">
          <div className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl leading-7">
            <p className="ml-16 lg:ml-28 xl:ml-32 2xl:ml-36 tracking-normal lg:tracking-wide xl:tracking-widest lg:min-w-96 xl:min-w-[28rem]">
              Best Leather Bag
            </p>
            <p className="tracking-normal xl:tracking-widest lg:tracking-wide">
              Collection For You
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="leading-5 tracking-normal text-[14px] md:max-w-96 xl:text-[20px] xl:max-w-[34rem] lg:text-[17px] lg:max-w-[30rem] lg:tracking-wide xl:tracking-widest">
              <span>
                Discover the epitome of style and craftsmanship with our curated
                feather bag collection
              </span>
            </p>
            <button className="flex items-center gap-2 bg-white px-2 pt-[5px] pb-1 xl:pt-3 xl:pb-2 rounded-3xl border-2 border-gray-300 w-40">
              <span className="mb-1">Start Shopping</span>
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-[-150px]">
          <p className="max-w-16">2024-PRESENT</p>

          <div className="flex gap-3">
            <button className="bg-white rounded-full p-2 lg:p-4">
              <IoIosArrowRoundBack />
            </button>
            <button className="bg-white rounded-full p-2 lg:p-4">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
