import React, {useState} from 'react';
import "../styles/Headr.css"
import { Link } from "react-router-dom"
import Photo from "../img/logo.png"
import Phot from "../img/Vector(2).png"
import Phot1 from "../img/Vector(3).png"
import Phot2 from "../img/Vector(4).png"
import FaBars from "react-icons/fa"

const Headr = () =>{

    const [isMobile, setIsMobile ] = useState(false);
  return (
    <nav className="navbar">
         <img src={Photo}  className="logo"/>
        <div className="container">
       
            
               <ul className={isMobile? "nav-links-mobile": "nav-links"}
                    onClick={() => setIsMobile(false)}
               >
                
                    <Link className='home' to="/">
                        <li>Контрагентам</li>
                        
                    </Link>       
              

                
                    <Link className='about' to="/blog">
                        <li>Дизайнерам</li>
                    </Link>       
              

                 
                    <Link className='sakills' to="/about">
                        <li>Вакансии</li>
                    </Link>       
              
  

                    <Link className='contact'to="/Map1">
                        <li>Поиск</li>
                    </Link>       
                 

                 
                    <a className='signup' >
                        <li>Вход/Регистрация</li>    
                    </a>       
                </ul> 
                <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile) }
                >
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}    
                </button>
                </div>
    </nav>
    
  )
}

export default Headr