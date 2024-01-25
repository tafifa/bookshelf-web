import ListBookTitle from "./listBookTitle";
import SearchTerm from "./searchTerm";
import ListBookContainer from "./listBookContainer";

function Manage() {
  return (
    <div className="items-center left-[22px] gap-5">
      
      <ListBookTitle />
      
      <SearchTerm />
      
      <ListBookContainer />
      {/* stop */}
    </div>
  )
}

export default Manage;