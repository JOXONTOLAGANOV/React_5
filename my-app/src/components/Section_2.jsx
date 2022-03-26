import React from 'react'
import "../styles/Section_2.css"
import Photo_11 from "../img/gallery__video--hover.png"
import Photo_12 from "../img/gallery__image.png"
import Photo_13 from "../img/gallery__image(1).png"
import Photo_14 from "../img/gallery__image(2).png"
import Photo_15 from "../img/gallery__image(3).png"
import Photo_16 from "../img/gallery__video.png"


function Section_2() {
  return (
    <div className='container'>
        <h3 className="sect3_text">#ojjo_jewerly</h3>
        <h1 className="sect2_text">Мы в социальных сетях</h1>
        <ul className="sect2_ul">
            <li className="sect2_li">
                <img src={Photo_11} />
            </li>    

             <li className="sect2_li">
                <img src={Photo_12} />
            </li> 

            <li className="sect2_li">
                <img src={Photo_13} />
            </li> 

            <li className="sect2_li">
                <img src={Photo_14} />
            </li> 

            <li className="sect2_li">
                <img src={Photo_15} />
            </li> 

            <li className="sect2_li">
                <img src={Photo_16} />
            </li>  
        </ul>
    </div>
  )
}

export default Section_2