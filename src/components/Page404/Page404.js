// <a href='https://www.freepik.com/photos/coffee'>Coffee photo created by wayhomestudio - www.freepik.com</a>

import React, {useEffect}  from "react";
import './page404.css'
import Spinner from "../Main/GlobalComponents/Spinner";

function Page404(){
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return(
        <div className='ghost-page'>
            <div className="ghost-text">
                <div className="ghost-text-wrapper">
                     <h1>Error 404</h1>
                    <p>The page you are looking for is not found</p>
                </div>
               
            </div>
            {/* <Spinner/> */}
        </div>
    )
}

export default Page404