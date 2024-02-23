import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Header() {
  return (
    <header className="bg-custom-yellow flex flex-row items-center justify-between mx-7">
      <h1 className="font-bold text-4xl" >My Book Collection📚</h1>
      <div className="flex flex-row items-center gap-10">
        <Link to="/" className="font-semibold">Home</Link>
        <Link to="/collection" className="font-semibold"><u>Collection</u></Link>
        <div className="border-l-2 my-3 pl-5 border-custom-grey-bolder flex flex-row items-center gap-3 justify-between">
          <Link to="/profile" className="font-semibold">Welcome, Anonymous!</Link>
          <Avatar size="70" round={true} name="Anonymous"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
