import SearchBar from './searchBar'
import EditBtn from './editBtn'
import AddBtn from './addBtn'

export default function ToolKit() {
  return (
    <div className='flex justify-end gap-52 mr-20'>
      <div className='flex justify-end gap-52 mt-10'>
      <SearchBar />
        <div className='flex gap-3'>
        <EditBtn />
        <AddBtn />
        </div>
      </div>
        
        
    </div>
  )
}
