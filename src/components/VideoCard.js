import React from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns';
import { BsBroadcast } from "react-icons/bs";



const VideoCard = ({info}) => {
    
  let {channelTitle,title,thumbnails,publishTime,liveBroadcastContent}=info.snippet;
  title=title.replaceAll("&#39;", "'");
  title=title.replaceAll("&quot;", '"');
  title=title.replaceAll("&amp;", "&");
  channelTitle=channelTitle.replaceAll("&amp;", "&");
  //cal time of upload
  const date = parseISO(publishTime);
  const result = formatDistanceToNow(date, { addSuffix: true });
  
  return (
    <div className='w-72 p-2'>
        <img alt='thumbnail' src={thumbnails.medium.url} className='rounded-3xl p-1 ml-1'></img>
        <ul className='p-1'>
            <li className='text-base font-semibold line-clamp-2 text-ellipsis overflow-hidden'>{title}</li>
            <div className='flex justify-between'>
            <li className='text-[#989897] text-sm mt-1'>{channelTitle}</li>
            {liveBroadcastContent==='live'?<div className='h-7 w-14 flex justify-center bg-red-600 gap-1 rounded-md text-center'><BsBroadcast className='mt-1.5'/>Live</div>:''}
            </div>
            <li className='text-[#a3a3a1] text-sm '>{result}</li>
            
        </ul>
    </div>
  )
}

export default VideoCard;