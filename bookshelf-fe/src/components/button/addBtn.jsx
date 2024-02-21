import { AiOutlinePlus } from "react-icons/ai";

export default function AddBtn() {
  return (
    <a href="/bookshelf/addPage" className="px-4 bg-white border border-custom-grey-light rounded-[7px] flex items-center justify-center gap-3">
      <p className=' font-semibold text-custom-grey-light'>Add</p>
      <AiOutlinePlus className='fill-custom-grey-light w-[26px] h-[26px]' />
    </a>
  )
}
