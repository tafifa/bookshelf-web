import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex place-items-center justify-between w-[346px] h-[41px] bg-white border-[#9D9B93] border-[1px] rounded-[10px] mb-3">
      <input className='outline-none ml-2 text-base/5 font-semibold text-[#9D9B93] ' placeholder="Search your book here..."/>
      <FaSearch className='mr-2 w-[18px] h-[18px] fill-custom-grey-light'/>
    </div>
  )
}

export default SearchBar;
