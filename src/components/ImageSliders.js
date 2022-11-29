import React from 'react'
import {useState} from 'react'
function ImageSliders({slides}) {
    const [currentIndex,setCurrentIndex]=useState(0);
    const slideStyle={
        height:'100%',
        weight:'100%',
        
         backgroundImage: `url(${slides[currentIndex].url})`
    }
    return (
    <div>
     ImageSliders
    </div>
  )
}

export default ImageSliders
