import React from "react";
import './LoadMoreStyles.css'

function LoadMoreBtn(props){

    return(
        <button onClick={props.onclck} className='load-more-btn'>Load More</button>
    )

}
export default LoadMoreBtn