import { FaSortAmountDownAlt } from "react-icons/fa";

function SortBtn() {
  return (
    <div className="w-[70px] h-[29px] bg-white border-custom-grey-light border-[1px] flex flex-row rounded-[7px] place-items-center justify-center gap-1">
      <div className="text-base/5 font-semibold text-custom-grey-light">Sort</div>
      <FaSortAmountDownAlt className="w-[18px] h-[18px] fill-custom-grey-light"/>
    </div> 
  )
}

export default SortBtn;
