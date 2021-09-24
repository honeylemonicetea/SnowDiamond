import React, {useEffect, useState} from 'react'
import './UnderConst.css'


function UnderConst(){

   

     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return(
        <>
        <div className='under-const-container'>
            <div className='const-text'>
                <h1>Page Under Construction</h1>
            </div>
            <div className='under-cover'/>
        </div>
        
       
        </>
    )
}

export default UnderConst