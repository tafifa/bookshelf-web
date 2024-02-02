import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className='w-[547px] h-[41px] bg-white border-custom-grey-light border rounded-xl flex items-center '>
        <input className='w-full h-full outline-none p-2 bg-transparent text-center text-base font-semibold text-custom-grey-light ' type="text" placeholder='Search your book here...'/>
        <MdSearch className='w-[26px] h-[26px] mr-2 fill-custom-grey-light ' />
    </div>
  )
}
