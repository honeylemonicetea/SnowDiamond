import React, {useEffect} from 'react'
import Single from './Single'
import './feats.css'

function Features(props){
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return(
        <div className="feature-box">
                <div className="feature-container">
                    {props.features.map((e)=><Single title={e.title} image={e.image}/>)}

                </div>
        </div>
    )
}

export default Features