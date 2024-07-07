/* eslint-disable react/prop-types */
import { MdArrowOutward } from "react-icons/md";

const FeatureCard = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover  bg-center p-6 flex  justify-between h-96 rounded-lg w-full lg:w-1/2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-xl max-w-64 ">{title}</h2>
        </div>
        <div>
          <button className="mt-4 bg-white  font-bold  rounded-full p-2">
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
