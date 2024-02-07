import { useState } from "react"

export default function AddPage() {
    const [tags, setTags] = useState([
      "no", "more", "vanilla", "css"
    ])

    return (
      <div className="bg-white">
        <div className="text-left font-semibold text-[32px] ml-20 ">
        Add Book
        </div>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-[90%] h-[628px] bg-white border rounded-lg border-custom-grey-lighter flex flex-row gap-8 items-center justify-center ">
          <div className="h-[95%] w-[45%] bg-white flex flex-col text-left justify-between ">
            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Name</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input book title here" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Author</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input author name here" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Year</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input year here" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Tags</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input tags here" />
              </div>
              <div className="flex flex-row gap-2">{tags.map((tag, index) => (
                <div className="flex flex-row bg-custom-grey-lighter h-[24px] rounded-md " key={index}>
                  <div className="ml-1 mr-1">{tag}</div>
                  <div className="w-[15px] h-[15px] cursor-pointer ">&times;</div>
                </div>
              )) } </div>
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="font-medium text-xl">Book Images</div>
              <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl flex items-center">
                <input type="text" className="ml-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="upload images here" />
              </div>
            </div>
            
          </div>

          <div className="border-1-2 bg-black h-[95%] w-[1px] "></div>

          <div className="h-[95%] w-[45%]  flex flex-col justify-between text-left ">

            <div className="flex flex-col gap-4 ">

              <div className="w-full flex flex-col gap-2 ">
                <div className="font-medium text-xl">Book Description</div>
                <div className="w-full h-[110px] bg-white border-custom-grey-lighter border rounded-xl ">
                  <input type="text" className="ml-3 mt-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input book description here" />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 ">
                <div className="font-medium text-xl">Your Notes</div>
                <div className="w-full h-[110px] bg-white border-custom-grey-lighter border rounded-xl ">
                  <input type="text" className="ml-3 mt-3 w-full bg-transparent outline-none  placeholder:text-custom-grey-light text-custom-grey-light " placeholder="input your notes here" />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 ">
                <div className="font-medium text-xl">Book Rates</div>
                <div className="w-full h-[44px] bg-white border-custom-grey-lighter border rounded-xl ">
                  
                </div>
              </div>
            

            </div>
            <div className="flex flex-row justify-end gap-5">
              <div className="w-[102px] h-[34px] bg-custom-grey-light rounded flex justify-center items-center font-semibold text-xs text-white ">Cancel</div>
              <div className="w-[102px] h-[34px] bg-custom-brown rounded flex justify-center items-center font-semibold text-xs text-white ">Add</div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
