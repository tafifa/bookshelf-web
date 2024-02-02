import FavoriteBooks from './favoriteBooks'

export default function ListBook() {
    const books = [
        {
            id:1,
            title:'Finding Jesus'
        },
        {
            id: 2,
            title: 'Chopkick Panda'
        },
        {
            id: 2,
            title: 'Ratatouing'
        },
        {
            id: 2,
            title: 'FungusBogeyman'
        }
    ]

    return (
        <div className='w-[611px] h-[563px]  ml-11 mt-5'>
            <div className='text-left font-semibold text-2xl text-custom-grey-bold mb-2'>Favorite Books</div>
            <div className=' flex flex-row'>
        {books.map((book) => (
            <FavoriteBooks key={book.id} data={book}/>
        ))}
    </div>
        </div>
    
  )
}
