import SearchBar from './searchBar'
import EditBtn from './editBtn'
import AddBtn from './addBtn'

export default function ToolKit({ onSearchResults }) {
  const handleSearchResults = (results) => {
    onSearchResults(results)
  }
  return (
    <div className='flex justify-between pt-10 px-10'>
      <h2 className='text-left font-semibold text-3xl text-custom-grey-bold '>List Book</h2>
      <SearchBar onSearch={handleSearchResults} />
      <div className='flex gap-2'>
        <EditBtn />
        <AddBtn />
      </div>
    </div>
  )
}
