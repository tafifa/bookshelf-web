function SearchBar() {
  return (
    <div className="flex place-items-center justify-between w-[346px] h-[41px] bg-white border-[#9D9B93] border-[1px] rounded-[10px] mb-3">
      <input className='ml-2 text-[16px] font-semibold text-[#9D9B93] leading-[19px]' placeholder="Search your book here..."/>
      <img className='mr-2 w-[18px] h-[18px]' src="src/assets/icon _search.svg" alt="" />
    </div>
  )
}

export default SearchBar;
