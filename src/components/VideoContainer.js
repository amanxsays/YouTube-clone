import { useEffect, useState } from 'react'
import {YOUTUBE_API_1, YOUTUBE_API_2 } from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const VideoContainer = () => {
  const [videos,setVideos]=useState(null);
  const tag=useSelector(store => store.app.tag);
  

  useEffect(()=>{
    fetchAPI();
  },[tag]);
  const fetchAPI=async ()=>{
    const data= await fetch(YOUTUBE_API_1+tag+YOUTUBE_API_2);
    const json=await data.json();
    setVideos(json.items);
  }
  if(videos==null) return <div>hiii</div>
  return (
    <div className='px-10'>
      <div className='flex flex-wrap '>
        {videos.map((vid)=><div key={vid?.id?.videoId}><Link to={"/watch?v="+vid?.id?.videoId}><VideoCard info={vid}/></Link></div>)}
        </div>
    </div>
  )
}

export default VideoContainer;