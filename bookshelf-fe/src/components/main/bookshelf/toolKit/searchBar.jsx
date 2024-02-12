import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className='bg-white border-custom-grey-light border rounded-xl flex items-center '>
        <input className='px-48 outline-none text-center text-base font-semibold text-custom-grey-light ' type="text" placeholder='Search your book here...'/>
        <MdSearch className='w-[26px] h-[26px] mr-2 fill-custom-grey-light ' />
    </div>
  )
}
