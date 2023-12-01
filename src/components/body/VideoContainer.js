import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../../utils/constants'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { loadVideos, unloadVideos } from '../../utils/videosSlice'
function VideoContainer() {
  const location = useLocation()
  const dispatch = useDispatch()
  const videos = useSelector(store =>  store.videos.videos)
  const getVideos = async () => {
    dispatch(unloadVideos())
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    dispatch(loadVideos(json.items))
  }
  useEffect(()=> {
    if(location.pathname ==='/')  getVideos() 
   
    return () => {}
  },[location.pathname])
  return (
    <div className='flex flex-wrap justify-around'>
      {videos.map(video =>     <Link key={video.id.videoId ? video.id.videoId : video.id} to={ video.id.videoId ? `/watch?v=${video.id.videoId}` : `/watch?v=${video.id}` }><VideoCard  info={video}/> </Link> )}
     
    </div>
  )
}

export default VideoContainer