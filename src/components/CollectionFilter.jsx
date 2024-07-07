// eslint-disable-next-line react/prop-types
const CollectionFilter = ({ selectedFilter, onFilterChange }) => {
  return (
    <div
      className="flex justify-between
     mb-4"
    >
      <label className="mr-4 flex gap-2 items-center">
        <input
          type="radio"
          name="collection"
          value="all"
          checked={selectedFilter === "all"}
          onChange={onFilterChange}
          className="mr-2 large-radio "
        />
        <span className="text-md md:text-2xl tracking-normal xl:tracking-widest lg:tracking-wide ">
          All Collection
        </span>
      </label>
      <label className="mr-4 flex gap-2 items-center">
        <input
          type="radio"
          name="collection"
          value="new"
          checked={selectedFilter === "new"}
          onChange={onFilterChange}
          className="mr-2 large-radio "
        />
        <span className=" text-md md:text-2xl tracking-normal xl:tracking-widest lg:tracking-wide ">
          New Collection
        </span>
      </label>
      <label className="mr-4 flex gap-2 items-center">
        <input
          type="radio"
          name="collection"
          value="new"
          checked={selectedFilter === "new"}
          onChange={onFilterChange}
          className="mr-2 large-radio "
        />
        <span className=" text-md md:text-2xl tracking-normal xl:tracking-widest lg:tracking-wide ">
          Popular Collection
        </span>
      </label>
    </div>
  );
};

export default CollectionFilter;
