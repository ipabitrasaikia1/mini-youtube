import React from "react";
function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  let views;
  if(statistics) {
    const { viewCount } = statistics;
    views = viewCount
  }
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{views ? Math.floor(views/1000)+"k views" : ""} </li>
      </ul>
    </div>
  );
}

export default VideoCard;
