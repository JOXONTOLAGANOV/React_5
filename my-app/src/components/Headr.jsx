import React from 'react'
import "../styles/Headr.css"
import { Link } from "react-router-dom"
import Photo from "../img/logo.png"
import Phot from "../img/Vector(2).png"
import Phot1 from "../img/Vector(3).png"
import Phot2 from "../img/Vector(4).png"

function Headr() {
  return (
    <nav className="navbar">
        <div className="container">
            <ul className="nav_ul">
                <li className="nav_li">
                    <Link className='nav_link' to="/">Контрагентам</Link>       
                </li>   

                 <li className="nav_li">
                    <Link className='nav_link' to="/blog">Дизайнерам</Link>       
                </li>  

                 <li className="nav_li">
                    <Link className='nav_link' to="/about">Вакансии</Link>       
                </li> 

                 <li className="nav_li1">
                        <img className='headr_img' src={Photo} alt="" />
                </li>   

                 <li className="nav_li">
                    <Link to="/Map1" className='nav_link' > <img className='phot' src={Phot} /> Поиск</Link>       
                </li>   

                 <li className="nav_li">
                    <a className='nav_link' >Вход/Регистрация</a>       
                </li>   

                 <li className="nav_li">
                    <a className='nav_link' >Вакансии</a>       
                </li>     

                <li className="nav_li12">
                    <img src={Phot1} />    
                </li> 

                <li className="nav_li12">
                <img src={Phot2} />   
                </li> 
            </ul> 
        </div>    
        
    </nav>
    
  )
}

export default Headr