import PageBar from "./pageBar/pageBar";
import SearchBar from "./searchBar";
import ListBook from "./bookList/listBook";

function ManagePage() {
  return (
    <div className="items-center left-[22px] gap-5">
      <PageBar />
      <SearchBar />
      <ListBook />
    </div>
  )
}

export default ManagePage;