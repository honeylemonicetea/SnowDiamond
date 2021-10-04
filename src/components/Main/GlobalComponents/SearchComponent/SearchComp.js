import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './SearchC.css'



function SearchComp() {

  const [buttonState, setButtonState] = useState("bar-closed")
  const toggleSearchBar = () =>{
    if (buttonState == 'bar-closed'){
      setButtonState('bar-opened')
    }
    else if (buttonState == 'bar-opened'){
      setButtonState('bar-closed')
    }
    
  }

  return (
    <>
      
      
        {/* <img src={require("../../../img/icons8-search.svg").default} /> */}
        <div className="search-bar-container">
            <input type="text" className={`test1 ${buttonState}`} />
            <FontAwesomeIcon icon={faSearch} onClick={toggleSearchBar} />
           
          
        </div>
        
    </>
  );
}

export default SearchComp;


