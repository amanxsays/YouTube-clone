import { useEffect, useState} from "react";
import LiveChat from "./LiveChat";
import MockLiveChatData from "./MockLiveChatData";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/chatSlice";

const LiveChatPage = () => {
  const [yourComment,setYourComment]=useState();

  const messageList = useSelector((store) => store.chat.listOfMessages); //to use the list to print
  const dispatch = useDispatch(); //to push into the list

  useEffect(() => {
    const i=setTimeout(()=> dispatch(addComment(MockLiveChatData())),800);
    return ()=>clearInterval(i)
  },[messageList]);

  return (
    <div className="flex-col">
    <div className="bg-[#323131] h-[65vh] w-[60vh] mx-16 rounded-md p-2 overflow-y-scroll flex flex-col-reverse ">
      <div>
        {messageList.map((comment) => <LiveChat info={comment} />)}
      </div>
    </div>
    <form className="ml-16 mt-2 w-[60vh] bg-neutral-800 h-8 rounded-md px-2 pt-1" onSubmit={(e)=>{
      e.preventDefault();
    }}>
      <input className="w-9/12 mr-3 bg-slate-200 rounded-md text-slate-950 px-2" placeholder="Your Comment" value={yourComment}
      onChange={(e)=>{
        setYourComment(e.target.value)
      }}
      ></input>
      <button className="bg-red-600 rounded-md px-2"
       onClick={()=>{
        dispatch(addComment({name:"AMAN (YOU)",chat:yourComment,newColor:'#7CFC00'}))
        setYourComment('');
      }
      }>Send→</button>
    </form>
    </div>
  );
};

export default LiveChatPage;
