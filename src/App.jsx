import './App.css'
import { useState } from 'react';
import {videoDB} from './database/videoDB';
import FormVideo from './components/FormVideo/FormVideo';
import VideoList from './components/VideoList/VideoList';


const App = () => {

  const [videoState, setVideoState] = useState(videoDB);

  const [editAbleVideo, setEditAbleVideo] = useState(null)

  const thumbnail =(receivingVideo)=>{
    setVideoState([...videoState, {...receivingVideo, id:videoState.length+1}])
  }



  const editFunc = (receivingEditVideo)=>{
    const index = videoState.findIndex((v)=>{
      return v.id===receivingEditVideo.id
    })

    console.log(index);

    const newVideo = [...videoState]
    newVideo.splice(index, 1, receivingEditVideo)
    setVideoState(newVideo);
    

    console.log(receivingEditVideo);
  }

  const deleteVideo = (id)=>{
    // console.log(id);
    setVideoState(videoState.filter((val)=>{
      return val.id !== id
    }))
  }

  const editVideo = (id)=>{
    // console.log(id);
    setEditAbleVideo(videoState?.find((val)=>{
      return val.id===id
    }))
  }
  console.log(editAbleVideo);

  return (
    <>
      <FormVideo stateFunc={thumbnail} editFunc={editFunc} editAbleVideo={editAbleVideo}></FormVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videoState={videoState}></VideoList>
    </>
  )
}

export default App