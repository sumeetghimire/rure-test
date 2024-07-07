import { CiSearch } from "react-icons/ci";

const FiltersBar = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap gap-2 justify-center lg:justify-between items-center">
        <button className="btn first-button">Men</button>
        <button className="btn">Women</button>
        <button className="btn">Children</button>
        <button className="btn">Brand</button>
        <button className="btn">New</button>
        <button className="btn">Popular</button>
        <div className="input-box">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-gray-300 placeholder:text-gray-600"
          />
          <div className="bg-gray-100 rounded-full p-1">
            <CiSearch />
          </div>
        </div>
        <button className="btn">About</button>
        <button className="btn last-button">FAQs</button>
      </div>
    </div>
  );
};

export default FiltersBar;
