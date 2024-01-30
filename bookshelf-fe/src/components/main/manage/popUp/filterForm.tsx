import React, { useState } from 'react'

interface FilterFormProps {
    seen: boolean
    onClose: () => void
}

const FilterForm: React.FC<FilterFormProps> = ({seen, onClose}) => {
    const [bookYear, setBookYear] = useState('')
    const [bookTags, setBookTags] = useState('')

    const handleBookYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookYear(e.target.value)
    }
    const handleBookTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookTags(e.target.value)
    }

    const handleReset = () => {
        setBookYear('')
        setBookTags('')
    }
    return (
        <div>
            {seen && 
            
            <div id='filterForm' className='absolute flex flex-col left-2  w-[310px] h-[151px] bg-white border-custom-grey-light border-[3px] rounded-[7px] text-left '>
                <div className='text-base/5 font-semibold text-[#4C4C4C] ml-2 mt-2'>Filter</div>

                <div className=' gap-2 flex flex-row justify-between ml-2 mb-1 mr-2'>
                    <div className='flex flex-col  w-[130px] h-[60px]'>
                        <div className='text-xs/4 font-semibold text-[#4C4C4C]'>Reading Status</div>
                        <div className='w-[130px] h-[30px] rounded-[10px] bg-[#D9D9D9] border-[1px] border-custom-grey-light'>
                            <input className='text-xs ml-2 outline-none bg-transparent' type="text" value={bookYear} onChange={handleBookYearChange}/>
                        </div>
                    </div>
                    <div className='flex flex-col  w-[130px] h-[50px] '>
                        <div className='text-xs/4 font-semibold text-[#4C4C4C]'>Book Tags</div>
                        <div className='w-[130px] h-[30px] rounded-[10px] bg-[#D9D9D9] border-[1px] border-custom-grey-light'>
                        <input className='text-xs ml-2 outline-none bg-transparent' type="text" value={bookTags} onChange={handleBookTagsChange}/>
                        </div>
                    </div>
                </div>

                <div className='ml-2 mr-2 flex flex-row justify-between'>
                    <button className='w-[77px] h-[31px] rounded bg-[#ff5b5b] text-xs/3 text-white' onClick={handleReset}>Reset</button>
                    <button className='w-[77px] h-[31px] rounded bg-[#ff5b5b] text-xs/3 text-white' onClick={onClose}>Cancel</button>
                    <button className='w-[77px] h-[31px] rounded bg-[#58DE58] text-xs/3 text-white'>Filter</button>
                </div>
                
            </div>
            }
        </div>
        
  )
}

export default FilterForm