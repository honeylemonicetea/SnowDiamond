import React, {useEffect, useState} from "react";
import './ItemDetail.css'
import {useParams, NavLink} from 'react-router-dom'
import Page404 from '../../Page404/Page404'
import {SwatchBig} from '../item-card/CardStyled'
import Spinner from '../../Main/GlobalComponents/Spinner'


// zoom
import ReactImageMagnify from "react-image-magnify";


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
          <NavLink to="/">HOME</NavLink> / <NavLink to="/shop">SHOP</NavLink> /{" "}
          <a href="#" style={{ textTransform: "uppercase" }}>
            {filtered.title}
          </a>
        </div>
        <div className="item-detail">
          <div className="images-left">
            <div className="preview-column">
              {/* use onclick and usestate hook */}
              <input type="radio" id="image1" name="preview" />
              <label htmlFor="image1">
                <img
                  src={filtered.imageA}
                  alt={filtered.title}
                  title={filtered.title}
                  onClick={() => setMainImage(filtered.imageA)}
                />
              </label>
              <input type="radio" id="image2" name="preview" />
              <label htmlFor="image2">
                <img
                  src={filtered.imageB}
                  alt={filtered.title}
                  title={filtered.title}
                  onClick={() => setMainImage(filtered.imageB)}
                />
              </label>
              <input type="radio" id="image3" name="preview" />
              <label htmlFor="image3">
                <img
                  src={filtered.imageC}
                  alt={filtered.title}
                  title={filtered.title}
                  onClick={() => setMainImage(filtered.imageC)}
                />
              </label>
              <input type="radio" id="image4" name="preview" />
              <label htmlFor="image4">
                <img
                  src={filtered.imageD}
                  alt={filtered.title}
                  title={filtered.title}
                  onClick={() => setMainImage(filtered.imageD)}
                />
              </label>
            </div>
            
            
            
            {/* <div className="main-image">
              <img
                src={mainImage ? mainImage : filtered.imageA}
                alt={filtered.title}
                title={filtered.title}
              />
            </div> */}
         <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: false, 
                height: 500,
                width: 320,
                src: mainImage ? mainImage : filtered.imageA,
              },
              largeImage: {
                src: mainImage ? mainImage : filtered.imageA,
                width: 1200,
                height: 1800,
              },
            }}
          />


            <div className="preview-row">
              {/* use onclick and usestate hook */}
              <div className="preview-inner">
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
            </div>
          </div>

 
          <div className="details-right">
            <h1 className="detail-title">{filtered.title}</h1>
            <p className="desc">{filtered.productDescription}</p>
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