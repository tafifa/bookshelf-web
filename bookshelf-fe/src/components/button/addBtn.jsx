import { AiOutlinePlus } from "react-icons/ai";

export default function AddBtn() {
  return (
    <a href="/collection/add" className="px-4 bg-custom-grey-light rounded-[7px] flex items-center justify-center gap-3">
      <p className=' font-semibold text-white'>Add</p>
      <AiOutlinePlus className='fill-white w-[26px] h-[26px]' />
    </a>
  )
}
