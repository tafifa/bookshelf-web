interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  desc: string;
}

interface ShelfProps {
  books: Book[];
  isRead: boolean;
}

function Shelf({ books, isRead }: ShelfProps) {

  return (
    <div className="border-dotted border-t-4 border-b-4 border-black m-2">
      <h3 className="text-xl p-1">{isRead ? 'Readed Books' : 'Unreaded Books'}</h3>
      {books.length === 0 ? (
        <p>No Books Found!</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="rounded bg-gray-200 p-5 m-2">
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.desc}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Shelf;
