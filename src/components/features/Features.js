import React, {useEffect} from 'react'
import Single from './Single'
import './feats.css'
import FooterCopyright from '../Main/FooterCopyright/FooterCopyright';
import FooterContact from '../Main/FooterContact/FooterContact';

function Features(props){
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <>
        <div className="feature-box">
          <div className="feature-container">
            {props.features.map((e) => (
              <Single title={e.title} image={e.image} />
            ))}
          </div>
        </div>
        <FooterContact />
        <FooterCopyright />
      </>
    );
}

export default Features