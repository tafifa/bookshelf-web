import { useState } from "react";
import FavoriteBooks from "./favoriteBooks";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

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

export default function ListBook() {
  const [selectedBook, setSelectedBook] = useState(null);
  const handleBookSelected = (book) => {
    setSelectedBook(book);
    setIsOpen((prevState) => !prevState);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-row w-full justify-between">
      <div className="w-[611px] h-[563px]  ml-11 mt-5">
        {/* <h2 className="text-left font-semibold text-2xl text-custom-grey-bold mb-2">
          Favorite Books
        </h2> */}
        <div className=" flex flex-row">
          {books.map((book) => (
            <FavoriteBooks
              key={book.id}
              data={book}
              onSelect={handleBookSelected}
            />
          ))}
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={599}
        className="overflow-y-auto rounded-l-xl"
      >
        {selectedBook && (
          <div className="w-[599px] h-[776px] rounded-l-lg bg-[#7B3F00] flex items-center justify-end overflow-y-auto ">
            <div className="w-[525px] h-[737px] bg-white rounded-l-lg flex flex-col ">
              <div className="w-[437px] h-[200px] flex flex-row justify-between mt-11 ml-6">
                <div className="flex flex-col text-left gap-3">
                  <h1 className="text-custom-grey-bold font-bold text-[40px]/10">
                    {selectedBook.title}{" "}
                  </h1>
                  <h4 className="text-custom-grey-bold ">
                    {" "}
                    <em>
                      {selectedBook.author} ({selectedBook.year})
                    </em>{" "}
                  </h4>
                </div>
                <div className="w-[150px] h-[200px] bg-custom-grey-lighter "></div>
              </div>

              <div className="w-[437px]  text-left mt-3 ml-6">
                <h4 className="font-semibold text-custom-grey-bold">
                  Description
                </h4>
                <h5 className="text-xs">
                  {" "}
                  <em> {selectedBook.description}</em>{" "}
                </h5>
              </div>

              <div className="w-[437px] text-left mt-6 ml-6">
                <h4 className="font-semibold text-custom-grey-bold">
                  Your Notes
                </h4>
                <h5 className="text-xs">
                  <em> {selectedBook.note}</em>{" "}
                </h5>
              </div>
              <div className="w-[224px] h-[34px] flex flex-row justify-between place-self-end mt-36 mr-7 ">
                <button className="w-[101px] h-full bg-custom-grey-light rounded text-white font-semibold text-xs ">
                  Delete
                </button>
                <button className="w-[101px] h-full bg-custom-brown rounded text-white font-semibold text-xs">
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
