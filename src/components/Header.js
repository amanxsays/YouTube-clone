import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col text-center px-2">
      <div className="flex">
        <RxHamburgerMenu
          className="h-16 mt-2 ml-4 cursor-pointer w-5"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/"><img alt="logo" src="https://i.ibb.co/Vdb07PH/Youtube-Logo-PNG-Photoroom.png" className="h-20 ml-2 w-70"/></a>
      </div>
      <div className="pt-4 ml-20">
        <input
          type="text"
          className="focus:outline-none focus:border-blue-400 ... h-10 w-[600px] p-4 border border-slate-600 rounded-l-full bg-[#1c1c1c] "
          placeholder="Search"
        ></input>
        <button
          type="submit "
          className="h-10 py-[12.5px] px-4 border border-slate-600 rounded-r-full bg-[#2e2e2e] "
        >
          <CiSearch />
        </button>
      </div>
      <div className="pt-4 ml-60">
        <img
          alt="user"
          src="https://imgs.search.brave.com/olxoMwph5cIqsopEnW7NIj6A4Knee2cqhdRtif2C59Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2ViLXVpLTMv/MTI4L0FjY291bnQt/Mi0xMjgucG5n"
          className="h-10"
        ></img>
      </div>
    </div>
  );
};
export default Header;
