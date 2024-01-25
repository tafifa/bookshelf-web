
export default function ListBookTitle() {
  return (
    <div className="flex justify-between mb-3">
        <div className="text-[24px] font-semibold leading-[28px]">List Books</div>
        <div className="flex gap-x-4">
          <div className="w-[70px] h-[29px] bg-white border-[#9D9B93] border-[1px] flex flex-row rounded-[7px] place-items-center justify-center gap-1">
            <div className="text-[16px] font-semibold text-[#9D9B93] leading-[19px]">Sort</div>
            <img className="w-[18px] h-[18px] fill-[#9D9B93]" src="src/assets/icon _sort ascending_.svg" alt="empty" /></div>
          <div className="w-[70px] h-[29px] bg-white border-[#9D9B93] border-[1px] flex flex-row rounded-[7px] place-items-center justify-center gap-1">
            <div className="text-[16px] font-semibold text-[#9D9B93] leading-[19px]">Add</div>
            <img className="w-[18px] h-[18px] fill-[#9D9B93]" src="src/assets/icon _plus_.svg" alt="empty" /></div>
        </div>
      </div>
  )
}
