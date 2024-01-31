

interface BookProps {
    data: {
      title: string
    }
  }

const FavoriteBooks: React.FC<BookProps> = ({ data }) => {
  return (
    <div className='w-full h-[268]'>
        <div className="w-[131px] h-[225px] flex flex-col justify-between ">
            <div className="w-full h-[200px] bg-custom-grey-lighter rounded-xl drop-shadow-lg"></div>
            <div className="font-semibold text-base text-black ">{data.title}</div>
        </div>
    </div>
  )
}

export default FavoriteBooks