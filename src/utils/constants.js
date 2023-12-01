const GOOGLE_API_KEY = "AIzaSyBIk860S2i44Q93zsBim_WSF7g33pN1B_o"
export const YOUTUBE_VIDEOS_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBIk860S2i44Q93zsBim_WSF7g33pN1B_o"


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const OFFSET_LIVE_CHAT = 25
export const YOUTUBE_SEARCH_BY_KEYWORD_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=20&q=(mykeyword)&type=video&key=${GOOGLE_API_KEY}`