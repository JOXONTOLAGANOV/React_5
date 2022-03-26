import React from 'react'
import "../styles/Main3.css"
import img_1_ from "../img/Polygon 3.png"
import img_2_ from "../img/Rectangle 21.png"
import img_3_ from "../img/seo-text.png"
import img_4_ from "../img/icon__list.png"

function Main3() {
  return (
    <div className='container'>
        <ul className="main3_ul">
            <li className="main3_li">
                <h4 className="main3_text">Бренд  <img className='img_1_' src={img_1_} /></h4>  
                <div className="main_span"></div>  
            </li>

            <li className="main3_li">
                <h4 className="main3_text">Цена  <img className='img_1_' src={img_1_} /> </h4>  
                <div className="main_span"></div>   
            </li>

            <li className="main3_li">
                <h4 className="main3_text">Для кого  <img className='img_1_' src={img_1_} /> </h4>   
                <div className="main_span"></div>  
            </li>

            <li className="main3_li">
                <h4 className="main3_text">Коллекция   <img className='img_1_' src={img_1_} /> </h4> 
                <div className="main_span"></div>    
            </li>

            <li className="main3_li">
                <h4 className="main3_text">Сезон  <img className='img_1_' src={img_1_} /> </h4>   
                <div className="main_span"></div>  
            </li>

            <li className="main3_li">
                <h4 className="main3_text">Событие   <img className='img_1_' src={img_1_} /> </h4> 
                <div className="main_span"></div>    
            </li>
        </ul>    
        <ul className="main3_ul_1">
            <li className="main_li_1">
                <img className="box_main3_img" cla src={img_2_} />
                <p className="mian3_text_big ">Подвеска</p>
                <h3 className="main_text_big_1">Dolce & Gabanna</h3>
                <a href="#" className="main3_link">175 000 ₽</a>
            </li>    

            <li className="main_li_1">
                <img src={img_2_} className="box_main3_img"/>
                <p className="mian3_text_big">Подвеска</p>
                <h3 className="main_text_big_1">Dolce & Gabanna</h3>
                <a href="#" className="main3_link">175 000 ₽</a>
            </li> 

            <li className="main_li_1">
                <img className="box_main3_img" src={img_2_} />
                <p className="mian3_text_big">Подвеска</p>
                <h3 className="main_text_big_1">Dolce & Gabanna</h3>
                <a href="#" className="main3_link">175 000 ₽</a>
            </li> 

            <li className="main_li_1">
                <img src={img_2_} className="main3_img"/>
                <p className="mian3_text_big">Подвеска</p>
                <h3 className="main_text_big_1">Dolce & Gabanna</h3>
                <a href="#" className="main3_link">175 000 ₽</a>
            </li> 

            <li className="main_li_1">
                <img src={img_2_} className="main3_img"/>
                <p className="mian3_text_big">Подвеска</p>
                <h3 className="main_text_big_1">Dolce & Gabanna</h3>
                <a href="#" className="main3_link">175 000 ₽</a>
            </li> 

            <li className="main_li_1">
                <img src={img_2_} className="main3_img"/>
                <p className="mian3_text_big">Подвеска</p>
                <h3 className="main_text_big_1">Dolce & Gabanna</h3>
                <a href="#" className="main3_link">175 000 ₽</a>
            </li> 
            <a href="#" className="main3_link_1">покажите еще</a>
        </ul>
        <div className="main3_box"></div>

        <div className="imges">
                <img className='imges_1' src={img_3_}/>
                <img className='imges_2'  src={img_4_}/>
        </div>
    </div>
  )
}

export default Main3