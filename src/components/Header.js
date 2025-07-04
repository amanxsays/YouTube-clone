import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useEffect, useState } from "react";
import {cacheResults} from '../utils/searchSlice';
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoginPage from "./LoginPage";
import { FaRegCircleUser } from "react-icons/fa6";



const Header = () => {
  const status = useOnlineStatus();
  const [logBtn, setLogBtn] = useState(localStorage.getItem("username")?localStorage.getItem("username"):"Login"); 
  const [show,setShow]=useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchList,setSearchList]=useState([]);
  const [tag,setTag]=useState('');
  const [showSearch,setShowSearch]=useState(false);

  const searchCache=useSelector((store)=> store.search);
  useEffect(()=>{
    const timeOut=setTimeout(()=>{
      if(searchCache[tag]) setSearchList(searchCache[tag]);
      else getSearchSuggetsions();
    },200)

    return ()=>{
      clearTimeout(timeOut);
    }
  },[tag])

  const getSearchSuggetsions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API +tag);
    const json = await data.json();
    console.log(json);
    
    setSearchList(json[1]);
    dispatch(cacheResults({
      [tag]: json[1],
    }));
  }

  return (
    <div className="grid grid-flow-col text-center px-2 fixed bg-[#111111f6] filter w-full h-[70px] z-10 ">
      <div className="flex">
        <RxHamburgerMenu
          className="h-16 mt-2 ml-4 cursor-pointer w-5"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/"><img alt="logo" src="https://i.ibb.co/Vdb07PH/Youtube-Logo-PNG-Photoroom.png" className="h-20 ml-2 w-70"/></a>
      </div>
      <div className="pt-4 ml-20">
        <div>
        <input
          type="text"
          className="focus:outline-none focus:border-blue-400 ... h-10 w-[600px] p-4 border border-slate-600 rounded-l-full bg-[#1c1c1c] "
          placeholder={"Search"}
          value={tag}
          onChange={(e)=>setTag(e.target.value)}
          onFocus={()=>setShowSearch(true)}
          onBlur={()=>setTimeout(()=>setShowSearch(false),250)}
        ></input>
        <button
          type="submit "
          className="h-10 py-[12.5px] px-4 border border-slate-600 rounded-r-full bg-[#2e2e2e] "
        >
          <Link to={`/search?s=${tag}`} ><CiSearch /></Link>
        </button>
        {showSearch && <ul className="absolute bg-[#343333] text-lg w-[99vh] mx-4 mt-1 rounded-md text-left z-10 ">
          {searchList.map((search)=><li key={search} className="hover:bg-[#616161] cursor-default mx-2 px-2 py-2 rounded-lg  "><Link to={`/search?s=${search}`} className="flex items-center gap-2"><CiSearch />{search}</Link></li>)}
        </ul>}
        </div>
      </div>
      <div className="pt-4 ml-40">
        <div className="bg-[#343433] rounded-lg p-2">
            <button className="SearchBtn flex items-center pl-4 gap-2" onClick={()=>{
              setShow(!show);
            }}>
              <FaRegCircleUser />{logBtn}
            </button>
          </div>
      </div>
      <LoginPage setLogBtn={setLogBtn} show={show} setShow={setShow}/>
    {status!=true?<div className="status">OFFLINE</div>:""}
    </div>
  );
};
export default Header;

 