import React from 'react'
import SearchBar from './searchBar'
import EditBtn from './editBtn'
import AddBtn from './addBtn'

export default function ToolKit() {
  return (
    <div className='flex justify-end gap-52 mr-20 mt-5'>
        <SearchBar />
        <div className='flex gap-3'>
        <EditBtn />
        <AddBtn />
        </div>
        
    </div>
  )
}
