import { useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from 'axios'

export default function SearchBar({ onSearch }) {
  const apikey = 'yourapikey'
  const [query, setQuery] = useState('')
  const handleSearch = async () => {
    try{
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apikey}`
      )
      onSearch(response.data.items)
    }catch (error){
      console.error('error fetching data')
    }
  }
  return (
    <div className='bg-white border-custom-grey-light border rounded-xl flex items-center '>
        <input className='px-48 outline-none text-center text-base font-semibold text-custom-grey-light ' type="text" placeholder='Search your book here...' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>
        <MdSearch onClick={handleSearch} className='w-[26px] h-[26px] mr-2 fill-custom-grey-light cursor-pointer ' />
        </button>
    </div>
  )
}
