import { parseISO,formatDistanceToNow } from "date-fns";
import { AiOutlineLike } from "react-icons/ai";

const Comment = ({ comment }) => {
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    updatedAt,
  } = comment?.snippet?.topLevelComment?.snippet;
  const date = parseISO(updatedAt);
    const result = formatDistanceToNow(date, { addSuffix: true });
  return (
    <div>
      <div  className="flex py-2">
        <img className="rounded-full h-12" alt="U" src={authorProfileImageUrl}></img>
        <div className="ml-4">
            <div className="flex gap-1">
            <div className="text-sm font-semibold">{authorDisplayName}</div>
            <div className="text-xs font-semibold pt-0.5 pl-1 text-[#807e7e]">{result}</div>
        </div>
        <div className=" text-sm pt-1 pb-1 text-wrap">{textDisplay.replace(/<br>|<a|a>|href=|>|<|\n/g,' ')}</div>
        <div className=" text-sm flex gap-1.5"><AiOutlineLike className="h-7 w-6"/><div className=" text-[#807e7e] pt-1">{likeCount}</div></div>
      </div>
      </div>
    </div>
  );
};

export default Comment;
