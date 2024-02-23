import { RiPencilFill } from "react-icons/ri";

export default function EditBtn() {
  return (
    <a href="/collection/edit" className='px-4 bg-white border border-custom-grey-light rounded-[7px] flex items-center justify-center gap-3 '>
      <p className=' font-semibold text-custom-grey-light  '>Edit</p>
      <RiPencilFill className='fill-custom-grey-light w-[26px] h-[26px]'/>
    </a>
  )
}
