function Header() {
  return (
    <header className="bg-custom-yellow  w-full h-[99px] flex flex-row items-center justify-between  ">
      <div className="font-bold text-4xl ml-7 " >My Book Collection📚</div>
      <div className="flex flex-row items-center gap-10 mr-8">
      <div className="flex flex-row justify-between w-[155px] h-[19px] items-center  ">
        <div className="font-semibold ">Home</div>
        <div className="font-semibold"><u>Bookshelf</u></div>
      </div>
      <div className="border-1-2 bg-black h-10 w-[1px] "></div>
      <div className="w-[261px] h-[71px] flex flex-row items-center gap-2 justify-between ">
        <div className="font-semibold">Welcome, Anonymous!</div>
        <div className="w-[70px] h-[70px] rounded-full bg-slate-400 "></div>
      </div>
      </div>
      
      
    </header>
  )
}

export default Header;