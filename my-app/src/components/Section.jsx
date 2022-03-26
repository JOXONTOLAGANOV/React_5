import React from 'react'
import "../styles/Section.css"
import Photo_1 from "../img/second-screen__category-item.png"
import Photo_2 from "../img/second-screen__category-item(1).png"
import Photo_3 from "../img/second-screen__category-item(2).png"
import Photo_4 from "../img/second-screen__category-item(3).png"
import Photo_5 from "../img/second-screen__category-item(4).png"
import Photo_6 from "../img/second-screen__category-item(5).png"

function Section() {
  return (
    <div className='container'>
      <h3 className="section_text">К мероприятиям</h3>  
      <h1 className="section_text1">Настоящая красота здесь!</h1>
      <ul className="sect_ul">
          <li className="sect_li">
              <h3 className="sect_text">Свадьба</h3>  
          </li>

          <li className="sect_li">
              <h3 className="sect_text">МУЖУ</h3>  
          </li>  

          <li className="sect_li">
              <h3 className="sect_text">жене</h3>  
          </li>  

          <li className="sect_li">
              <h3 className="sect_text">партнеру</h3>  
          </li>  

          <li className="sect_li">
              <h3 className="sect_text">коллекции</h3>  
          </li>  

          <li className="sect_li">
              <h3 className="sect_text">редкость</h3>  
          </li>    
      </ul>

      <ul className="sect_img">
          <li className="sect_li_img">
              <img  className='img__'  src={Photo_1}/>
          </li>

           <li className="sect_li_img">
              <img  className='img__'  src={Photo_2}/>
          </li>  

           <li className="sect_li_img">
              <img  className='img__'  src={Photo_3}/>
          </li>  

           <li className="sect_li_img">
              <img  className='img__'  src={Photo_4}/>
          </li>  

           <li className="sect_li_img">
              <img  className='img__'  src={Photo_5}/>
          </li>  

           <li className="sect_li_img">
              <img  className='img__' src={Photo_6}/>
          </li>    
      </ul>
    </div>
  )
}

export default Section