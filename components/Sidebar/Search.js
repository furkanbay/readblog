import SearchIcon from "../SVG/Search";
export default function Search({ search, handleChange }) {
  return (
    <div className="bg-white p-4 mb-12">
      <div className="relative flex items-center bg-gray-200">
        <input
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search for blog"
          className="appearance-none w-full bg-transparent px-4 pr-8 py-2 text-black focus:outline-none"
        />
        <SearchIcon className="absolute right-0 m-2" />
      </div>
    </div>
  );
}
