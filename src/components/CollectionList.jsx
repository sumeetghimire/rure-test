import { useState } from "react";
import CollectionCard from "./CollectionCard";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const CollectionList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const collections = [
    { name: "Cosmopolitan", items: 18 },
    { name: "Chelsea", items: 0 },
    { name: "City", items: 0 },
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : collections.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < collections.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Collection List</h2>
        <div className="flex items-center">
          <button onClick={handlePrevious} className="p-2">
            <IoIosArrowRoundBack size={24} />
          </button>
          <span className="mx-2">
            {activeIndex + 1}/{collections.length}
          </span>
          <button onClick={handleNext} className="p-2">
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-max md:grid-cols-3 gap-4">
        {collections.map((collection, index) => (
          <CollectionCard
            key={collection.name}
            name={collection.name}
            items={collection.items}
            onHover={() => handleHover(index)}
            isActive={hoveredIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
