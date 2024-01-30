import React from 'react'
import { IoStarSharp } from "react-icons/io5";

interface AddFormProps {
    seen: boolean
    onClose: () => void
}

const AddBookForm: React.FC<AddFormProps> = ({seen, onClose}) => {
  return (
    <div>
        {seen && 
        <div className='w-full h-[467px] absolute flex flex-col bg-white border-custom-grey-light border-[3px] rounded-[7px]'>
            <div className='mt-2 mb-2 ml-3 text-2xl font-semibold  text-left'>List Books</div>

            <div className='ml-3 mb-2 w-[310px] h-[355px] bg-[#D9D9D9] border-custom-grey-light border-[1px] rounded-[10px]'>
              <div className='ml-3 mt-3 text-xs/4 font-semibold text-[#4C4C4C]  text-left'>Book Title</div>
              <div className='ml-3 w-[283px] h-[30px] rounded-[10px] border border-custom-grey-light bg-white '>
                <input className='ml-2 w-[260px] outline-none bg-transparent' type="text" />
              </div>

              <div id='flex untuk book author and book year' className='flex flex-row ml-3 justify-between'>
                <div className='flex flex-col'>
                  <div className='mt-2 text-xs/4 font-semibold text-[#4C4C4C]  text-left'>Book Author</div>
                  <div className='w-[136px] h-[30px] rounded-[10px] border border-custom-grey-light bg-white'>
                    <input className='ml-2 outline-none bg-transparent w-full' type="text" />
                  </div>
                </div>
                <div className='flex flex-col mr-2'>
                  <div className='mt-2 text-xs/4 font-semibold text-[#4C4C4C]  text-left'>Book Year</div>
                  <div className=' mr-2 w-[136px] h-[30px] rounded-[10px] border border-custom-grey-light bg-white'>
                    <input className='ml-2 outline-none bg-transparent' type="text" />
                  </div>
                </div>
              </div>

              <div id='flex untuk book tags and book image' className='flex flex-row ml-3 justify-between mt-2'>
                <div className='flex flex-col'>
                  <div className='text-xs/4 font-semibold text-[#4C4C4C]  text-left'>Book Tags</div>
                  <div className='w-[136px] h-[30px] rounded-[10px] border border-custom-grey-light bg-white'>
                    <input className='ml-2 w-full outline-none bg-transparent' type="text" />
                  </div>
                </div>
                <div className='flex flex-col mr-2'>
                  <div className=' text-xs/4 font-semibold text-[#4C4C4C]  text-left'>Book Image</div>
                  <div className='mr-2 w-[136px] h-[30px] rounded-[10px] border border-custom-grey-light bg-white'>
                    <input className='ml-2 outline-none bg-transparent' type="text" />
                  </div>
                </div>
              </div>
              
              <div className='ml-3 mt-2 text-xs/4 font-semibold text-[#4C4C4C]  text-left'>Book Description</div>
              <div className='ml-3 w-[280px] h-[75px] rounded-[10px] border border-custom-grey-light bg-white '>
                <input className='w-full h-full outline-none bg-transparent' type="text" />
              </div>

              <div className='flex flex-col  items-center justify-center '>
              <div className='mt-2 text-xs/4 font-semibold text-[#4C4C4C]'>Books Rate</div>
              <div className='w-[133px] h-[30px] rounded-[10px] border border-custom-grey-light bg-white flex flex-row justify-center gap-1 items-center '>
              <IoStarSharp className='w-[20px] h-[20px] '/>
              <IoStarSharp className='w-[20px] h-[20px] '/>
              <IoStarSharp className='w-[20px] h-[20px] '/>
              <IoStarSharp className='w-[20px] h-[20px] '/>
              <IoStarSharp className='w-[20px] h-[20px] '/>
              </div>
              </div>
            </div>

            <div className='flex flex-row gap-2 mr-2 mt-1'>
              <div className='w-[140px] '></div>
              <button className='w-[77px] h-[31px] rounded bg-[#ff5b5b] text-xs/3 text-white' onClick={onClose}>Cancel</button>
              <button className='w-[77px] h-[31px] rounded bg-[#58DE58] text-xs/3 text-white'>Add</button>
            </div>
        </div> }
    </div>
  )
}

export default AddBookForm