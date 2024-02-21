import Avatar from "react-avatar";

function Header() {
  return (
    <header className="bg-custom-yellow flex flex-row items-center justify-between">
      <h1 className="font-bold text-4xl ml-7" >My Book Collection📚</h1>
      <div className="flex flex-row items-center gap-10 mr-8">
        <a className=" font-semibold" href="/">Home</a>
        <a className="font-semibold" href="/collection"><u>Collection</u></a>
        <div className="border-l-2 mt-3 mb-3 pl-5 border-custom-grey-bolder flex flex-row items-center gap-3 justify-between">
          <a className="font-semibold" href="/profile">Welcome, Anonymous!</a>
          <Avatar size="70" round={true} name="Anonymous"/>
        </div>
      </div>
    </header>
  )
}

export default Header;