import React from 'react'
import "../styles/Map2.css"
import Photo_map from "../img/Vector.png" 
import Photo_map1 from "../img/Vector(1).png" 
import Photo_map2 from "../img/Group(1).png" 
import Photo_map3 from "../img/contact__maps.png" 
function Map2() {
  return (
    <div className='container'>
        <div className="map_2">
            <div className="map2_box">
                <h3 className="map2_text">Главная</h3>  
                <h3 className="map2_text">/ Контакты</h3>      
            </div>    
            
            <h1 className="map2_text1">Контакты</h1>

            <ul className="map_ul">
                <li className="map_li">
                    <h3 className="map2_li_text">Главный офис</h3>    
                    <p className="map_li_text1"> <img className='photo_map' src={Photo_map} /> Невский 140, офис 1-5</p>
                    <p className="map_li_text11">Невский 140, офис 1-5</p>
                </li>    

                <li className="map_li">
                    <h3 className="map2_li_text">Телефоны</h3>    
                    <p className="map_li_text1"> <img className='photo_map' src={Photo_map1} /> 8 (812) 458-56-45</p>
                    <p className="map_li_text11">8-911-878-00-00</p>
                </li>  

                <li className="map_li">
                    <h3 className="map2_li_text">E-mail</h3>    
                    <p className="map_li_text1">  <img className='photo_map' src={Photo_map2} />office@ojjo.com</p>
                    <p className="map_li_text11">sales@ojjo.com</p>
                </li>  

                <li className="map_li">
                    <h3 className="map2_li_text">Доп. адреса</h3>    
                    <p className="map_li_text1"> <img className='photo_map' src={Photo_map} /> Невский 142, офис 1-5</p>
                    <p className="map_li_text11">Загородный 145, офис 11-15</p>
                </li>  
            </ul>
        </div>    

        <div className="photo_map__">
            <img src={Photo_map3} />    
        </div>
    </div>
  )
}

export default Map2