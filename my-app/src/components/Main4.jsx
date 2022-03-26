import React from 'react'
import "../styles/Main4.css"
import main4_img from "../img/product-card__images.png"
import img_3_ from "../img/seo-text.png"
import img_4_ from "../img/icon__list.png"

function Main4() {
  return (
    <div className='container'>
      <ul className="main4_ul">
          <li className="main4_li">
            <h3 className="main4_text">Главная /</h3>  
            <div className="main4_box"></div>
          </li>  

          <li className="main4_li">
            <h3 className="main4_text">Каталог /</h3>
            <div className="main4_box"></div>  
          </li>  

          <li className="main4_li">
            <h3 className="main4_text">Категория /</h3>  
            <div className="main4_box"></div>
          </li>  

          <li className="main4_li">
            <h3 className="main4_text">Подвеска Dolce & Gabarra</h3>  
            <div className="main4_box"></div>
          </li>  
      </ul>

      <main className='main_4'>
          <img className='main4_img' src={main4_img} />  
          <div className="main4_box_">
              <h1 className='main4_textt'>Подвеска Dolce & Gabbara</h1>
              <p className='main4_text_litle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus.  Et nulla sit convallis orci est, fames sit luctus lacus. </p>
              <h3 className='main4_text__'>200 000 ₽ </h3>

              <div className="box_main4">
                  <a href="#" className="main4_link">купить</a>  
                  <a href="#" className="main4_link_">добавить в корзину</a>  
              </div>
          </div>
      </main>

      <div className="imges">
                <img className='imges_1' src={img_3_}/>
                <img className='imges_2'  src={img_4_}/>
        </div>
    </div>
  )
}

export default Main4