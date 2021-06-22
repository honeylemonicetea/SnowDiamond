import React from 'react'
import './collage.css'
import {NavLink} from 'react-router-dom'

function Collage(){
    return(
        <div className="collage">
            <img id="col1" src={require("../../../../img/collage1.jpg").default}/>
            <img id="col2" src={require("../../../../img/collage-2.jpg").default}/>
            <div id="col3-shadow"/>
            <img id="col3" src={require("../../../../img/collage3.jpg").default}/>
            <p id="text"><NavLink to='/shop'>SHOW WOMEN’S DRESS</NavLink></p>
        </div>
    )
}

export default Collage
