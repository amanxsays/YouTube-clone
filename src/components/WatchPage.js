import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { COMMENTS_API_1, COMMENTS_API_2 } from "../utils/constants";
import CommentBox from "./CommentBox";
import ShimmerCard from "./ShimmerCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async () => {
    const data = await fetch(
      COMMENTS_API_1 + searchParams.get("v") + COMMENTS_API_2
    );
    const json = await data.json();
    setComments(json.items);
  };
  if (comments == null)
    return (
      <div className="scale-[190%] pt-[80px] pl-[28vh]">
        <ShimmerCard />
      </div>
    );
  return (
    <div>
      <div className="pl-20 pt-4">
        <iframe
          className="rounded-2xl"
          width="690"
          height="388"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1"}
          title="video"
          frameBorder="0"
          autoplay='1'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentBox comments={comments} />
    </div>
  );
};

export default WatchPage;
