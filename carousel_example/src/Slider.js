import React, {useState} from 'react'
import './Slider.scss'
function Slider(){
    const [x, setX] = useState(0);
    let sliderArr = [1,2,3,4,5]
    const goLeft=()=>{
        setX(x+100)
    };
    const goRight=()=>{
         setX(x-100)
    };
    
    return(
        <div className='slider'>
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>{item}</div>
                )
            })}
            <button id='goLeft' onClick={goLeft}>Left</button>
            
            <button id='goRight' onClick={goRight}>Right</button>
        </div>
    )
}

export default Slider;