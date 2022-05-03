import React from 'react'
import { Link } from 'react-router-dom'
import logo from './icons8-haze.gif'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light myNavBackground myNav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="48" height='48' width='48' className="d-inline-block align-text-top" />
                    </Link>

                        <div className="nav-item myLocation">
                           <h3 className={window.innerWidth> 850 ? 'h5' : 'h6'}> City : <Link to='/' className='cityName'>{props.city}</Link></h3>
                        </div>
            
                </div>
            </nav>
        </div>
    ) 
}

export default Navbar
