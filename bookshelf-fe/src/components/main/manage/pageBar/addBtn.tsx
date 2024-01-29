import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddBookForm from "../popUp/addBookForm";

function AddBtn() {
  const [seen, setSeen] = useState(false)
  const handleClick = () => {
    setSeen(!seen)
  }

  return (
    <div>
      <button onClick={handleClick} className="w-[70px] h-[29px] bg-white border-custom-grey-light border-[1px] flex flex-row rounded-[7px] place-items-center justify-center gap-1">
      <div className="text-base/5 font-semibold text-custom-grey-light ">Add</div>
      <IoMdAdd className="w-[18px] h-[18px] fill-custom-grey-light"/>
    </button>
    <AddBookForm seen={seen} onClose={() => setSeen(false)}/>
    </div>
    
  )
}

export default AddBtn;
