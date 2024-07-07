/* eslint-disable react/prop-types */

const FeatureItem = ({ title, icon: Icon, description }) => {
  return (
    <div className="bg-gray-200 text-center p-4 xs:p-0 sm:p-0 md:p-0 lg:p-10 xl:12 rounded-xl">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
        {title}
      </h2>
      <Icon className="mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-4" />
      <p className="mt-2 max-w-[17rem] sm:max-w-[20rem] mb-2 mx-2  ">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
