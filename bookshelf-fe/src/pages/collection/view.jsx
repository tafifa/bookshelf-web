import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function View({book, isOpen, toggleDrawer}) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      size={599}
      className="overflow-y-auto rounded-l-xl"
    >
      <div className="w-[599px] h-[776px] rounded-l-lg bg-[#7B3F00] flex items-center justify-end overflow-y-auto ">
        <div className="w-[525px] h-[737px] bg-white rounded-l-lg flex flex-col ">
          <div className="w-[437px] h-[200px] flex flex-row justify-between mt-11 ml-6">
            <div className="flex flex-col text-left gap-3">
              <h1 className="text-custom-grey-bold font-bold text-[40px]/10">
                {book.title}{" "}
              </h1>
              <h4 className="text-custom-grey-bold ">
                {" "}
                <em>
                  {book.author} ({book.year})
                </em>{" "}
              </h4>
            </div>
            <div className="w-[150px] h-[200px] bg-custom-grey-lighter "></div>
          </div>

          <div className="w-[437px]  text-left mt-3 ml-6">
            <h4 className="font-semibold text-custom-grey-bold">Description</h4>
            <h5 className="text-xs">
              {" "}
              <em> {book.description}</em>{" "}
            </h5>
          </div>

          <div className="w-[437px] text-left mt-6 ml-6">
            <h4 className="font-semibold text-custom-grey-bold">Your Notes</h4>
            <h5 className="text-xs">
              <em> {book.note}</em>{" "}
            </h5>
          </div>
          <div className="w-[224px] h-[34px] flex flex-row justify-between place-self-end mt-36 mr-7 ">
            <button className="w-[101px] h-full bg-custom-grey-light rounded text-white font-semibold text-xs ">
              Delete
            </button>
            <button className="w-[101px] h-full bg-custom-brown rounded text-white font-semibold text-xs">
              Edit
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default View;
