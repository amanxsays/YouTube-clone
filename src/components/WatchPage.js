import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { COMMENTS_API_1, COMMENTS_API_2 } from "../utils/constants";
import CommentBox from "./CommentBox";
import ShimmerCard from './ShimmerCard';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments,setComments]=useState(null);
  useEffect(()=>{
    fetchComments();
  },[])
  const fetchComments= async ()=>{
    const data= await fetch(COMMENTS_API_1+searchParams.get('v')+COMMENTS_API_2);
    const json= await data.json();
    setComments(json.items);
  }
  if(comments==null) return <div className="scale-[190%] pt-20 pl-[30vh]"><ShimmerCard/></div>
  return (
    <div>
      <div className="pl-20 pt-4">
        <iframe
          className="rounded-2xl"
          width="690"
          height="388"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="Give me 13 Mins. I&#39;ll Save 13 Years of Your Life..."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentBox comments={comments}/>
    </div>
  );
};

export default WatchPage;
