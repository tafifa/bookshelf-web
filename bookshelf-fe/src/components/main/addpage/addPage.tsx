import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx"
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'


export default function AddPage() {
  const initialbookstate = {
    title: "",
    author: "",
    year: null,
    description: "",
    notes:"",
  }
  const [book, setBook] = useState(initialbookstate)
  const [tags, setTags] = useState<string[]>([])
  const [inputTags, setInputTags] = useState<string>('')
  const [stars, setStars] = useState<number | null>(1);
  

  const handleInputChange = (e: any) => {
    const {name, value} = e.target
    setBook({...book, [name]: value})
  }


  const handleTagsChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setInputTags(e.target.value)
  }
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    if(e.key === 'Enter' && inputTags.trim() !== ''){
      setTags([...tags, inputTags.trim()])
      setInputTags('')
    }
  }
  const handleRemoveTag = (index: number) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }

  const saveBook = () => {
    var data = {
      title: book.title,
      author: book.author,
      year: book.year,
      description: book.description,
      notes: book.notes,
      tags: tags,
      rating: stars
    }
    console.log(data)
  }

    return (
      <div className="bg-white">
        <div className="text-left font-semibold text-[32px] ml-20 ">
        Add Book
        </div>
      <div id="form-field" className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-[90%] h-[628px] bg-white border rounded-lg border-custom-grey-lighter flex flex-row gap-8 items-center justify-center ">
          <div className="h-[95%] w-[45%] bg-white flex flex-col text-left justify-between ">
            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Name</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input book title here" name="title" onChange={handleInputChange} />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Author</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input author name here" name="author" onChange={handleInputChange} />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Year</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input year here" name="year" onChange={handleInputChange} />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Tags</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input tags here" value={inputTags}  name="tags" onKeyDown={handleInputKeyPress} onChange={handleTagsChange} />
              </div>
              <div className="flex flex-row gap-2">{tags.map((tag, index) => (
                <div className="flex flex-row bg-custom-grey-lighter h-[24px] rounded-md items-center" key={index}>
                  <div className="ml-1 mr-1 text-white font-medium text-sm ">{tag}</div>
                  <RxCross1 onClick={() => handleRemoveTag(index)} className="cursor-pointer w-[15px] mr-1 "/>
                </div>
              )) } </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Images</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="upload images here"  />
              </div>
            </div>
            
          </div>

          <div className="border-1-2 bg-black h-[95%] w-[1px] "></div>

          <div className="h-[95%] w-[45%]  flex flex-col justify-between text-left ">

            <div className="flex flex-col gap-4 ">

              <div className="w-full flex flex-col gap-2 ">
                <div className="font-medium text-xl">Book Description</div>
                <div className="w-full h-[110px] bg-white border-custom-grey-lighter border rounded-xl ">
                  <input type="text" className="ml-3 mt-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input book description here" name="description" onChange={handleInputChange} />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 ">
                <div className="font-medium text-xl">Your Notes</div>
                <div className="w-full h-[110px] bg-white border-custom-grey-lighter border rounded-xl ">
                  <input type="text" className="ml-3 mt-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input your notes here" name="notes" onChange={handleInputChange} />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 ">
                <div className="font-medium text-xl">Book Rates</div>
                <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex flex-row items-center justify-center ">
                <Rating
                  value={stars}
                  onChange={(event, newValue) => {
                    setStars(newValue)
                    console.log(stars)
                  }}
                  icon={<StarIcon style={{ color: 'gray' }} />}
                  emptyIcon={<StarOutlineIcon style={{ color: 'gray' }} />}
                />
                </div>
              </div>
            

            </div>
            <div className="flex flex-row justify-end gap-5">
              <Link to="/" className="w-[102px] h-[34px] bg-custom-grey-light rounded flex justify-center items-center font-semibold text-xs text-white " >Cancel</Link>
              <div className="w-[102px] h-[34px] bg-custom-brown rounded flex justify-center items-center font-semibold text-xs text-white cursor-pointer " onClick={saveBook} >Add</div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
