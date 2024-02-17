import ToolKit from "./toolKit/toolKit";
import ListBook from "./listbook/listBook";
import { useState } from "react";

export default function Bookshelf() {
  const [searchResults, setSearchResults] = useState([])
  console.log(searchResults)
  return (
    <>
      <ToolKit onSearchResults={setSearchResults}/>
      <ListBook />
    </>
  )
}
