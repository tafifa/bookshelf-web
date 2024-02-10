const FavoriteBooks = ({ data, onSelect }) => {
  
  return (
    <button onClick={() => onSelect(data)} className='w-full h-[268]'>
        <div className="w-[131px] h-[225px] flex flex-col justify-between ">
            <div className="w-full h-[200px] bg-custom-grey-lighter rounded-xl drop-shadow-lg"></div>
            <h4 className="font-semibold text-base text-black ">{data.title}</h4>
        </div>
    </button>
  )
}

export default FavoriteBooks