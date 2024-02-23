import { useState } from "react";
import { MdSearch } from "react-icons/md";
// import bookUtilities from "../../../../api/book/bookshelf";

export default function SearchBar({ onSearch }) {
  
  const [query, setQuery] = useState('')
  const handleSearch = () => {
    const foundBook = bookUtilities.getBookByTittle(query); 
    
    if (foundBook) {
      onSearch(foundBook);
    } else {
      console.log(`${query} not found`);
    }
  };
  return (
    <div className='bg-white border-custom-grey-light border rounded-xl flex items-center '>
        <input className='px-48 outline-none text-center text-base font-semibold text-custom-grey-light ' type="text" placeholder='Search your book here...' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>
        <MdSearch onClick={handleSearch} className='w-[26px] h-[26px] mr-2 fill-custom-grey-light cursor-pointer ' />
        </button>
    </div>
  )
}
