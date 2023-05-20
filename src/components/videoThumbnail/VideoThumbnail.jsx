import React from 'react';
import Button from '../Buttons';
import './videoThumnail.css'

const VideoThumbnail = ({id,title,channelName,verified,views,time, deleteVideo, editVideo}) => {
  return (
    <main className='mainWraper'>
    <div className='wraper'>
        <button onClick={()=>deleteVideo(id)} className='delete'>X</button>
        <button onClick={()=>editVideo(id)} className='edit'>Edit</button>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="thumbnail" style={{width:300, height:200}} />
        <h3>{title}</h3>
        <h5>{channelName} {verified && "✔️"}</h5>
        <p>{views} . {time}</p>
        <Button onPlay={()=>console.log('Currently Playing')} onPause={()=>console.log('Currently Paused')}>Play</Button>
    </div>
    </main>
  )
}

export default VideoThumbnail