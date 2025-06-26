import { formatDistanceToNow, parseISO } from 'date-fns';
import { BsBroadcast } from "react-icons/bs";





const ResultVideoCard = ({info}) => {
    
  let {channelTitle,title,thumbnails,publishTime,liveBroadcastContent}=info.snippet;
  title=title.replaceAll("&#39;", "'");
  title=title.replaceAll("&quot;", '"');
  title=title.replaceAll("&amp;", "&");
  channelTitle=channelTitle.replaceAll("&amp;", "&");
  //cal time of upload
  const date = parseISO(publishTime);
  const result = formatDistanceToNow(date, { addSuffix: true });
  
  return (
    <div className='px-4 pt-2 flex gap-6'>
        <img alt='thumbnail' src={thumbnails.high.url} className='rounded-3xl max-w-[100vh] h-[60vh] p-1 ml-1'></img>
        <ul className='pt-2'>
            <li className='text-lg font-semibold line-clamp-2 text-ellipsis overflow-hidden'>{title}</li>
            <li className='text-[#989897] text-md mt-3'>{channelTitle}</li>
            <li className='text-[#a3a3a1] text-md '>{result}</li>
            {liveBroadcastContent==='live'?<div className='h-7 mt-2 w-14 flex justify-center bg-red-600 gap-1 rounded-lg text-center'><BsBroadcast className='mt-1.5'/>Live</div>:''}
        </ul>
        
    </div>
  )
}

export default ResultVideoCard;