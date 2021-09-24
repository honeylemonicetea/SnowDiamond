import React, {useEffect, useState} from "react";
import './ItemDetail.css'
import {useParams} from 'react-router-dom'
import Page404 from '../../Page404/Page404'
import {SwatchBig} from '../item-card/CardStyled'
import Spinner from '../../Main/GlobalComponents/Spinner'
import Zoom from 'react-img-zoom'

function ItemDetail(){
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
    let {id} = useParams()
    const [filtered, setFiltered] = useState("")
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("XS")
    useEffect(() => {  
     (async () =>{
      setLoading(true)
        await fetch(`https://h-and-m-api.herokuapp.com/clothing/${id}`)
        .then((result) => result.json())
        .then(
          (result) => {
            setFiltered(result)
            setLoading(false)
            setMainImage(filtered.imageA)
          }
          
        )
       
        ;  
      }) ()
       
      }, []);
   
    if (filtered.swatches == undefined){ 
      return <Spinner/>
    }
    return (
      <div className="visibleArea">
        <div className="nav-breadcrumb">
          <a href="">Home</a> /<a href="">Shop</a> /<a href=""></a>
        </div>
        <div className="item-detail">
          <div className="images-left">
            <div className="preview-column">
              {/* use onclick and usestate hook */}

              <img
                src={filtered.imageA}
                alt={filtered.title}
                title={filtered.title}
                onClick={() => setMainImage(filtered.imageA)}
              />

              <img
                src={filtered.imageB}
                alt={filtered.title}
                title={filtered.title}
                onClick={() => setMainImage(filtered.imageB)}
              />
              <img
                src={filtered.imageC}
                alt={filtered.title}
                title={filtered.title}
                onClick={() => setMainImage(filtered.imageC)}
              />
              <img
                src={filtered.imageD}
                alt={filtered.title}
                title={filtered.title}
                onClick={() => setMainImage(filtered.imageD)}
              />
            </div>
            <div className="main-image">
              <img
                src={mainImage ? mainImage : filtered.imageA}
                alt={filtered.title}
                title={filtered.title}
              />
              {/* <Zoom img={mainImage ? mainImage : filtered.imageA} 
              zoomScale={3}
              width={600}
              height={600} /> */}
            </div>
          </div>
          <div className="details-right">
            <h1 className="detail-title">{filtered.title}</h1>
            <p className='desc'>
              {filtered.productDescription}
              
            </p>
            <p className="detail-price">{filtered.price}</p>
            <p className="color-chosen">
              {color ? color : filtered.swatches[0].colorName}
            </p>
            {filtered.swatches.map((e) => (
              <SwatchBig
                colorCode={e.colorCode}
                title={e.colorName}
                onClick={() => setColor(e.colorName)}
                className="color-box"
              />
            ))}
            <div className="size-chart">
              <p>
                Size: <span>{size}</span>
              </p>
              <button className="size-box" onClick={() => setSize("XS")}>
                XS
              </button>
              <button className="size-box" onClick={() => setSize("S")}>
                S
              </button>
              <button className="size-box" onClick={() => setSize("M")}>
                M
              </button>
              <button className="size-box" onClick={() => setSize("L")}>
                L
              </button>
              <button className="size-box" onClick={() => setSize("XL")}>
                XL
              </button>
            </div>
            <div className="add-cart">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ItemDetail