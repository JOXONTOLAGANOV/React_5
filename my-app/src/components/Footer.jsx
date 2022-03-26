import React from 'react'
import "../styles/Footer.css"
import img from "../img/subscribe__icon.png"

function Footer() {
  return (
    <div className='footer_1'>
        <div className="container">
                <h3 className="footer_text">Полезные советы и персональный предложения</h3>
                <h1 className="footer_text1">Эксклюзивная рассылка</h1>
                <div className="boxx">
                <div className="footer_box">
                    <p className="footer_p_text1"> <img className='img_11' src={img} /> Личный менеджер</p>
                    <p className="footer_p_text"> <img className='img_1' src={img} />  Доставка и оформление</p>    
                    <p className="footer_p_text"> <img className='img_1' src={img} />  Индивидуальный дизайн</p>        
                </div>
                <div className="footer_box_1">
                    <input className='input' type="Ваш e-mail" text="Ваш e-mail" />
                    <a href="#" className='footer_link'>отправить</a>    
                </div>
                </div>
        </div>    
    </div>
  )
}

export default Footer