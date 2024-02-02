import { AiOutlinePlus } from "react-icons/ai";

export default function AddBtn() {
  return (
    <div>
        <button className='w-[100px] h-[41px] bg-white border border-custom-grey-light rounded-[7px] flex items-center justify-center gap-3'>
            <div className='text-base font-semibold text-custom-grey-light'>Add</div>
            <AiOutlinePlus className='fill-custom-grey-light w-[26px] h-[26px]' />
        </button>
    </div>
  )
}
