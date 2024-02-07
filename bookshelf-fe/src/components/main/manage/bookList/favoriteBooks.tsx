interface BookProps {
    data: {
      id: number,
      title: string,
      description: string,
      note:string,
      author:string,
      year:number
    }
    onSelect: (book: {id: number; title: string; description: string; note:string; author:string; year:number}) => void
  }

const FavoriteBooks: React.FC<BookProps> = ({ data, onSelect }) => {
  
  return (
    <button onClick={() => onSelect(data)} className='w-full h-[268]'>
        <div className="w-[131px] h-[225px] flex flex-col justify-between ">
            <div className="w-full h-[200px] bg-custom-grey-lighter rounded-xl drop-shadow-lg"></div>
            <div className="font-semibold text-base text-black ">{data.title}</div>
        </div>
    </button>
  )
}

export default FavoriteBooks