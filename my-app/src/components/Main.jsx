import React from 'react'
import "../styles/Main.css"
import Photo1 from "../img/first-screen__brands.png"

function Main() {
  return (
    <div className='Headr'>
        <div className='span'></div>
        <div className="container">
        <div className="text">
        <h1 className='main_text'>Долго, дорого, богато!</h1>
        <a href="#" className='main_link'>каталог изделий </a>
            <div className="box">
                <img src={Photo1}  className='img'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main