import AddBtn from "./addBtn";
import SortBtn from "./sortBtn";

function PageBar() {
  return (
    <div className="flex gap-x-4">
      <h3 className="flex justify-between mb-3 text-[24px] font-semibold leading-[28px]">List Books</h3>
      <AddBtn />
      <SortBtn />
    </div>
  )
}

export default PageBar;
