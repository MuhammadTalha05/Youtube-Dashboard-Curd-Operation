import React, { useEffect, useState } from 'react';
import './FormVideo.css'

const FormVideo = ({stateFunc,editAbleVideo, editFunc}) => {

    const [formState, setFormState] = useState({
        channelName : "Muhammad Talha",
        verified: true,
        title: '',
        views: "",
        time: "",
        
    })

    const inputChange = (e)=>{
        // console.log(e.target.name, e.target.value);
        setFormState({...formState ,
            [e.target.name]:e.target.value,
        })
    }



    // Handle Submit onCLick Handling
    const handleSubmit = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        if(editAbleVideo)
        {
            editFunc(formState)
        }
        else{
            stateFunc(formState)
        }
        setFormState({
            title: "",
            views: "",
            time: "",

        })
    }

    useEffect(()=>{
        if(editAbleVideo){
            setFormState(editAbleVideo)
        }
    },[editAbleVideo])


  return (
    <div>
        <form>
            <input type="text" placeholder={`Enter Your Title`} value={formState.title} onChange={inputChange} name={'title'}/>
            <input type="text" placeholder={`Enter Video Views`} value={formState.views} onChange={inputChange} name={'views'}/>
            <input type="text" placeholder={`Enter Video Time`} value={formState.time} onChange={inputChange} name={'time'}/>
            <button onClick={handleSubmit}>{editAbleVideo ? "Edit Video" : "Add New Video"}</button>
        </form>
    </div>
  )
}

export default FormVideo