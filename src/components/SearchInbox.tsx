import searchGray from "../assets/search-gray.svg";
const SearchInbox = () => (
  <div className="mt-2">
    <div className="flex items-center rounded-md bg-white pl-2 outline-2 -outline-offset-1 outline-[#828282] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
      <input
        type="text"
        placeholder="Search"
        className="block min-w-0 grow py-1.5 pr-1 pl-1 text-base placeholder:text-[#4F4F4F] focus:outline-none sm:text-sm/6 text-[#4F4F4F]"
      />
      <img
        src={searchGray}
        alt="search"
        className="bottom-2 left-2 p-3 rounded brightness-90 contrast-150 w-10 h-10"
      />
    </div>
  </div>
);

export default SearchInbox;
