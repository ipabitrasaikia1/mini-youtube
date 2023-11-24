import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../../utils/constants'
import VideoCard from './VideoCard'
function VideoContainer() {
  const [videos, setVideos] = useState([])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    console.log("Json :", json)
    setVideos(json.items)
  }
  useEffect(()=> {
    getVideos()
  },[])
  return (
    <div className='flex flex-wrap'>
      {videos.map(video =>  <VideoCard key={video.id} info={video}/>)}
     
    </div>
  )
}

export default VideoContainer