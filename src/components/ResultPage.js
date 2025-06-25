import { useSearchParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { YOUTUBE_API_1, YOUTUBE_API_2 } from "../utils/constants";
import ResultVideoCard from "./ResultVideoCard";
import { Link } from "react-router-dom";
import HomeShimmer from "./HomeShimmer";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const [videos,setVideos]=useState(null);
  useEffect(()=>{
    fetchAPI();
  },[]);
  const fetchAPI=async ()=>{
    const data= await fetch(YOUTUBE_API_1+searchParams.get('s')+YOUTUBE_API_2);
    const json=await data.json();
    setVideos(json.items);
  }
  if(videos==null) return <HomeShimmer/>
  return (
    <div className='px-10'>
      <div>
        {videos.map((vid)=><div key={vid?.id?.videoId}><Link to={"/watch?v="+vid?.id?.videoId}><ResultVideoCard info={vid}/></Link></div>)}
        </div>
    </div>
  )
}

export default ResultPage