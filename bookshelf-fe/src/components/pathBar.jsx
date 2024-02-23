import { GiHamburgerMenu } from "react-icons/gi";

function PathBar() {
  return (
    <>
      <div className="bg-custom-grey-lighter drop-shadow-xl py-3">
        <div className="pl-7 flex flex-row items-center">
          <button>
            <GiHamburgerMenu className="w-[30px] h-[30px] " />
          </button>
          <button className="pl-8 text-xl font-medium text-custom-grey-bold ">
            {">"} Collection {">"} Book {">"} Juara
          </button>
        </div>
      </div>
    </>
  );
}

export default PathBar;
