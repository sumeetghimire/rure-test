const SupportedBrands = () => {
  const brands = [
    { name: "Nike", logo: "/logos/Nike.png" },
    { name: "Puma", logo: "/logos/Nike.png" },
    { name: "Reebok", logo: "/logos/Nike.png" },
    { name: "Etsy", logo: "/logos/Nike.png" },
    { name: "ebay", logo: "/logos/Nike.png" },
    { name: "ZARA", logo: "/logos/Nike.png" },
    { name: "Addidas", logo: "/logos/Nike.png" },
    { name: "asos", logo: "/logos/Nike.png" },
  ];

  return (
    <div className="p-6 text-center">
      <h2 className="text-4xl  mb-6  mt-2">We are supported by</h2>
      <div className="grid grid-cols-3  md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-gray-200 flex justify-center items-center p-4 md:p-6 lg:p-8 xl:p-12 rounded-lg"
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-12 md:h-16 lg:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedBrands;
