/* eslint-disable react/prop-types */

const CollectionCard = ({ name, items, isActive, onHover }) => {
  const backgroundImages = {
    Cosmopolitan: "./bedsheet.jpg",
    Chelsea: "./bedsheet1.jpg",
    City: "./bedsheet-2.jpg",
  };

  const backgroundImage = backgroundImages[name];

  return (
    <div
      onMouseEnter={onHover}
      className={`border rounded-lg flex items-center justify-center py-12 text-center relative overflow-hidden min-h-56`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`relative `}>
        <h3 className="text-lg font-semibold">{name}</h3>
        {isActive && (
          <div className="mt-2">
            <p className="text-gray-500">{items} items</p>
            <button className="mt-2 bg-white border font-bold py-2 px-4 rounded-full">
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionCard;
