import React from 'react'
import "../styles/Section1.css"
import Photo_8 from "../img/blog__item.png"
import Photo_9 from "../img/blog__item(1).png"
import Photo_10 from "../img/blog__item(2).png"

function Section1() {
  return (
    <div className='container'>
        <h3 className="section1_text">Полезные статьи</h3>
        <h1 className="section1_text1">Лучшие советы по подбору дорогих подарков</h1>
        <ul className="sect1_ul">
            <li className="sect1_li">
                <img src={Photo_8} />    
            </li>

            <li className="sect1_li">
                <img src={Photo_9} />    
            </li>  

            <li className="sect1_li">
                <img src={Photo_10} />    
            </li>      
        </ul>
        <a href="#" className='sect1_link'>читать наш блог</a>
    </div>
  )
}

export default Section1