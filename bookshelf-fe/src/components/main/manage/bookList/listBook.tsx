import Book from "./book";

function ListBook() {
  const books = [
    {
      id: 1,
      title: 'Book Name',
      author: 'Book Author',
      year: 'Book Year',
      desc: 'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...'
    },
    {
      id: 2,
      title: 'Book Name',
      author: 'Book Author',
      year: 'Book Year',
      desc: 'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...'
    },
    {
      id: 3,
      title: 'Book Name',
      author: 'Book Author',
      year: 'Book Year',
      desc: 'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...'
    }
  ]

  return (
    <div className='flex flex-col w-[346px] h-[433px] bg-white border-custom-grey-light border-[1px] rounded-[10px] gap-2 place-items-center'>
      {books.map((book) => (
        <Book key={book.id} data={book}/>
      ))}
    </div>
  )
}

export default ListBook;
