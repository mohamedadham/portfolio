import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Header=(props)=>{    
    return(
        <header >
        <button className="nav-toggle" aria-label="toggle navigation" onClick={()=> document.body.classList&& document.body.classList.toggle('nav-open')} >
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link to="/portfolio" className="nav__link" onClick={()=>  document.body.classList.remove('nav-open')} >Home</Link></li>
                <li className="nav__item"><a href="/portfolio#services" className="nav__link" onClick={()=>  document.body.classList.remove('nav-open')}>My Services</a></li>
                <li className="nav__item"><a href="/portfolio#about" className="nav__link" onClick={()=>  document.body.classList.remove('nav-open')}>About me</a></li>
                <li className="nav__item"><a href="/portfolio#work" className="nav__link" onClick={()=>  document.body.classList.remove('nav-open')}>My Work</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header