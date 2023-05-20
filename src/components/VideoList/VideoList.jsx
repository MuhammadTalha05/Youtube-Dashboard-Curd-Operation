import React from 'react'
import '../../App.css'
import VideoThumbnail from '../videoThumbnail/VideoThumbnail';

const VideoList = ({videoState, deleteVideo, editVideo}) => {

  return (
    <div className='flexGrid'>
      {
        videoState?.map((val, index)=>{
          return(
            <div key={index}>
            <VideoThumbnail {...val} deleteVideo={deleteVideo} editVideo={editVideo}></VideoThumbnail>
            </div>
          )
        })
      }
      </div>
  )
}

export default VideoList