import SearchBar from './searchBar'
import EditBtn from './editBtn'
import AddBtn from './addBtn'

export default function ToolKit() {
  return (
    <div className='flex justify-between pt-10 px-10'>
      <h2 className='text-left font-semibold text-3xl text-custom-grey-bold '>List Book</h2>
      <SearchBar />
      <div className='flex gap-2'>
        <EditBtn />
        <AddBtn />
      </div>
    </div>
  )
}
