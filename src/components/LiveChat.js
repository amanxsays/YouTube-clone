import React from "react";
import { FaUserCircle } from "react-icons/fa";


const LiveChat = ({info}) => {
  let { name, chat, newColor}=info;
  return (
    <div>
      <div className="flex py-2 items-center px-2">
        <FaUserCircle style={{color: newColor}} className="scale-125"/>
        <div className="ml-4 flex gap-2 items-center">
          <div className="text-sm font-bold">{name}</div>
          <div className=" text-sm pt-1 pb-1 text-wrap">{chat}</div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
