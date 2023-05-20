
import { useState } from 'react';
import './Button.css';

const Buttons = ({children, onPlay, onPause }) => {

  const [state, setState]= useState(false)

    // let currentState = false
    
    const handleClick= (e)=>{
      e.stopPrapagation;
      e.preventDefault();
       if(state)
       {
         onPause();
       }
       else{
        onPlay();
       }

      setState(!state);

    }
    return (
    <>
        <button onClick={handleClick}> {state ? "Stop" : "Play" }</button>
    </>
  )
}

export default Buttons