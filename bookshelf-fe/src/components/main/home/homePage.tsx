import AddBook from "./addBook";
import BookShelf from "./bookShelf";
import Search from "./search";

function Home() {
  return (
    <>
      <AddBook />
      <Search />
      <BookShelf />
    </>
  )
}

export default Home;