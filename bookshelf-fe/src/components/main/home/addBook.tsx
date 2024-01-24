function AddBook() {
  return (
    <div className="m-2 mt-3 mb-3 p-5 bg-white rounded-lg">
      <h3 className="text-xl font-bold">Add Some Books Here!</h3>
      <form>
        <fieldset className="mb-3">
          <legend className="mb-1">Title:</legend>
          <input type="text" placeholder="Fill book title here!" className="placeholder:text-center border border-rounded p-1 pl-4 pr-4 w-full"/>
        </fieldset>

        <fieldset className="mb-3">
          <legend className="mb-1">Author:</legend>
          <input type="text" placeholder="Fill book author here!" className="placeholder:text-center border border-rounded p-1 pl-4 pr-4 w-full"/>
        </fieldset>

        <fieldset className="mb-3">
          <legend className="mb-1">Year Released:</legend>
          <input placeholder="Fill book year released here!" type="number" min="0" max="2024" step="1" className="placeholder:text-center border border-rounded p-1 pl-4 pr-4 w-full"/>
        </fieldset>
        
        <fieldset className="mb-3">
          <legend className="mb-1">Description:</legend>
          <textarea placeholder="Fill book description here!" className="placeholder:text-center border border-rounded p-1 pl-4 pr-4 w-full"></textarea>
        </fieldset>
        

        <fieldset className="mb-3">
          <label>Did you had finish it?</label>
          <input type="checkbox" className="ml-2 cursor-pointer"/>
        </fieldset>

        <input type="submit" className="bg-green-600 text-white hover:bg-green-800 border border-rounded w-full p-1 pl-4 pr-4 text-center cursor-pointer"/>
      </form>
    </div>
  )
}

export default AddBook;