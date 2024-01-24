export default function NavBar() {
  const className="text-lg p-1 pl-3 pr-3 hover:underline hover:font-bold hover:text-shadow hover:text-xl hover:cursor-pointer"

  return (
    <nav className="w-full bg-neutral-600 text-white bg-opacity-75 mt-1 p-1">
      <ul className="flex justify-center">
        <li className={className}>Manage</li>
        <li className={className}>Home</li>
        <li className={className}>Profile</li>
      </ul>
    </nav>
  )
}
