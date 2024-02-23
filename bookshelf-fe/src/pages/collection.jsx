import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import PathBar from "../components/pathBar";
import Footer from "../components/footer";
import View from "./collection/view";
import SearchBar from "../components/button/searchBar";
import AddBtn from "../components/button/addBtn";
import EditBtn from "../components/button/editBtn";

const books = [
  {
    id: 1,
    title: "Finding Jesus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Jason Wright",
    year: 2020,
  },
  {
    id: 2,
    title: "Chopkick Panda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Darrell Van Citters",
    year: 2011,
  },
  {
    id: 3,
    title: "Ratatouing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Michelle Gabriel",
    year: 2007,
  },
  {
    id: 4,
    title: "Fungus ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Raymond Briggs",
    year: 1997,
  },
];

function LinkTag({ book }) {
  return <a href={"colllection/view/" + book.id}>{book.title}</a>;
}

function Collection() {
  // const [selectedBook, setSelectedBook] = useState(null);
  // const handleBookSelected = (book) => {
  //   setSelectedBook(book);
  //   setIsOpen((prevState) => !prevState);
  // };

  return (
    <>
      <Header />
      <PathBar />
      <div className="bg-white min-h-screen p-7">
        <div className="flex justify-between mb-7">
          <h2 className="text-left text-white font-semibold text-3xl text-custom-grey-bold py-1">
            Favorite Books
          </h2>
          <SearchBar />
          <div className="flex gap-2">
            {/* <EditBtn /> */}
            <AddBtn />
          </div>
        </div>

        <div className="flex flex-row gap-7">
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/collection/view/${book.id}`} // Assuming the route path is '/books/:id'
              className="hover:cursor-pointer"
            >
              <div className="flex flex-col justify-between hover:cursor-pointer">
                <div className="w-[150px] h-[210px] bg-custom-grey-lighter rounded-xl drop-shadow-lg mb-2"></div>
                <p className="font-semibold text-base text-black ">
                  {book.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
    
  );
}

export default Collection;
