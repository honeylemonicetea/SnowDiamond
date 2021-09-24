import React, {useState} from "react";
import './BackToTop.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";



function ArrowUp(){
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState("none")

     useScrollPosition(({ prevPos, currPos }) => {
       console.log(currPos.x);
       if (currPos.y < -200){
           setVisible('block')
       }
       else{
           setVisible('none')
       }
       console.log(currPos.y);
     });


    const moveBack = () =>{
        window.scrollTo(0,0)
    }

    return (
      <div className="button-container" style={{display:`${visible}`}}>
          <button className='top-btn' onClick={moveBack} >
              <FontAwesomeIcon icon={faArrowUp} size='2x' color='white'  />
          </button>
        
      </div>
    );
}

export default ArrowUp