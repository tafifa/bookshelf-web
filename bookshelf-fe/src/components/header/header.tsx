import NavBar from "./navbar/navbar";

function Header() {
  return (
    <header className="mt-2 mb-2">
      <h1 className="text-3xl font-bold">My Book Collection</h1>
      <NavBar />
    </header>
  )
}

export default Header;