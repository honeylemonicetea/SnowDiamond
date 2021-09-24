import React from 'react'
import './single.css'

function Single(props){
    return(
        <div className="single-item" style={{backgroundImage:`url(${props.image})`}}>
            <p>{props.title}</p>
        </div>
    )
}

export default Single