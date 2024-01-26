interface BookProps {
  data: {
    title: string;
    author: string;
    year: string;
    img: string;
    desc: string;
  };
}

const Book: React.FC<BookProps> = ({ data }) => {
  return (
    <div className='w-[324px] h-[113px] bg-white border-custom-grey-light border-[1px] rounded-[10px] flex flex-row mt-2 place-items-center justify-center gap-2'>
      <div className='w-[230px] h-[95px] flex flex-col text-left gap-1'>
        <div className='text-[16px] font-semibold text-custom-grey-light leading-[19px]'>{data.title}</div>
        <div className='text-[12px] italic font-semibold text-custom-grey-light leading-[14px]'>{`${data.author} (${data.year})`}</div>
        <img src={data.img} alt={`Cover for ${data.title}`} className='w-full h-auto' />
        <div className='text-[12px] italic font-semibold text-custom-grey-light leading-[14px]'>{data.desc}</div>
      </div>
      <div className='w-[66px] h-[95px] bg-[#d9d9d9]'></div>
    </div>
  );
}

export default Book;
