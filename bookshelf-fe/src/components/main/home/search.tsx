function Search() {
  return (
    <div className="m-2 mt-3 mb-3 p-5 bg-white rounded-lg">
      <h3 className="text-xl font-bold">Search your book here!</h3>
      <fieldset>
        <label htmlFor="">Want to search by:</label>
        <select className="search-option" name="radio-option">
          <option value="title-search">Judul Buku</option>
          <option value="author-search">Penulis Buku</option>
          <option value="year-search">Tahun Terbit</option>
        </select>
      </fieldset>
      <input type="text" placeholder="fill this searchbar" className="placeholder:text-center border border-rounded p-1 pl-4 pr-4 w-full"/>
    </div>
  )
}

export default Search;