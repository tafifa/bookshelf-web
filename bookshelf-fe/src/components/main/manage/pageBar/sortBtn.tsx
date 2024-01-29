import { FaSortAmountDownAlt } from "react-icons/fa";
import FilterForm from "../popUp/filterForm";
import { useState } from "react";

function SortBtn() {
  const [seen, setSeen] = useState(false)
  const handleClick = () => {
    setSeen(!seen)
  }

  return (
    <div>
      <button onClick={handleClick} className="w-[70px] h-[29px] bg-white border-custom-grey-light border-[1px] flex flex-row rounded-[7px] place-items-center justify-center gap-1">
      <div className="text-base/5 font-semibold text-custom-grey-light">Filter</div>
      <FaSortAmountDownAlt className="w-[18px] h-[18px] fill-custom-grey-light"/>
    </button>
    <FilterForm seen={seen} onClose={() => setSeen(false)} />
    </div>
    

  )
}

export default SortBtn;
