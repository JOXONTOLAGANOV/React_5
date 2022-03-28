import React from 'react'
import "../styles/Footer1.css"
import Photo_img from "../img/Rectangle 13.png"
import Photo_img1 from "../img/Rectangle 14.png"

function Footer1() {
  return (
    <div className='footer1'>
        <div className="container">
            <div className="footer_span">
            <ul className="footer_1_ul">
                <li className="footer_li_1">
                    <h2 className='footer1_text'>Полезные </h2>
                    <div className="div_1"></div>   
                    <p className='footer1_text_'>Доставка</p> 
                    <p className='footer1_text_'>Акции</p> 
                    <p className='footer1_text_'>Политика конфиденциальности</p> 
                </li>    

                <li className="footer_li_1">
                    <h1 className='footer1_text1'>оплата</h1>   
                    <div className="div_11"></div>  
                    <p className='footer1_text_'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p> 
                    <div className="img__1">
                        <img src={Photo_img} />    
                        <img className='img_12' src={Photo_img1} />
                    </div>
                   
                </li> 

                {/* <li className="footer_li_1">
                    <h1 className='footer1_text1'>контакты</h1>  
                    <div className="div_11"></div>   
                    <p className='footer1_text_'>8 (812) 234-56-55</p> 
                    <p className='footer1_text_'>8 (812) 234-56-55</p> 
                    <p className='footer1_text_'>ojjo@ojjo.ru</p> 
                    <p className='footer1_text_1'></p> 
                </li> 

                <li className="footer_li_1">
                    <h1 className='footer1_text'>социальные сети</h1>   
                    <div className="div_1"></div>  
                    <p className='footer1_text_'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                </li>  */}
            </ul>    
            </div>
            {/* <div className="qwerty"></div>
            <div className="www">
                    <ul className="ww">
                        <li className="wwww">
                            <h3 className="text_ww">(c) 2020 OJJO jewelry</h3>    
                        </li>    

                        <li className="wwww">
                            <h3 className="text_ww">Договор публичной офферты</h3>    
                        </li> 

                        <li className="wwww">
                            <h3 className="text_ww">Контрагентам</h3>    
                        </li> 

                        <li className="wwww">
                            <h3 className="text_ww">Сделано Figma.info</h3>    
                        </li> 
                    </ul>
            </div> */}
        </div>    
    </div>
  )
}

export default Footer1