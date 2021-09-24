import React from 'react'
import './Spinner.css'
import Spin from '../../../img/spin1.png'

function Spinner(){
    return(
        <div className="spin-box">
             <img src={Spin} alt="" className="spinner" />
             <p id='spinner-text'>Getting the latest fashion trends...</p>
        </div>
       
    )
}

export default Spinner