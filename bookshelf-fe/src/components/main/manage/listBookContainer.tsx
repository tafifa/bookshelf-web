import React from 'react'

export default function ListBookContainer() {
  return (
    <div className='flex flex-col w-[346px] h-[433px] bg-white border-[#9D9B93] border-[1px] rounded-[10px] gap-2 place-items-center'>
        <div className='w-[324px] h-[113px] bg-white border-[#9D9B93] border-[1px] rounded-[10px] flex flex-row mt-2 place-items-center justify-center gap-2'>
          <div className='w-[230px] h-[95px] flex flex-col text-left gap-1'>
            <div className='text-[16px] font-semibold text-[#9D9B93] leading-[19px]'>Book Title</div>
            <div className='text-[12px] italic font-semibold text-[#9D9B93] leading-[14px]'>Book Author (Book Year)</div>
            <img src="src/assets/border.svg" alt="" />
            <div className='text-[12px] italic font-semibold text-[#9D9B93] leading-[14px]'>Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...</div>
          </div>
          <div className='w-[66px] h-[95px] bg-[#d9d9d9]'></div>
        </div>
        {/* book2 */}
        
      </div>
  )
}
