import AddBtn from "./addBtn";
import SortBtn from "./sortBtn";

function PageBar() {
  return (
    <div className="flex justify-between">
      <h3 className="flex justify-between mb-3 text-2xl/7 font-semibold ">List Books</h3>
      <div className="flex gap-2">
      <SortBtn />
      <AddBtn />
      </div>
      
    </div>
  )
}

export default PageBar;
