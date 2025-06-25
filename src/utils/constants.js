const key='AIzaSyCxbrbQ96leZ8tnYdNIXCAAaaJk6oDLsio';
//AIzaSyCxbrbQ96leZ8tnYdNIXCAAaaJk6oDLsio
//AIzaSyD33jl44_Ck4wswIaRoHlkYz8oLZvLVq6s

export const YOUTUBE_API_1=`https://www.googleapis.com/youtube/v3/search?key=${key}&q=`;
export const YOUTUBE_API_2=`&type=video&part=snippet&maxResults=16`;
export const COMMENTS_API_1=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=`;
export const COMMENTS_API_2=`&key=${key}&maxResults=15`;
export const YOUTUBE_SEARCH_API='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';