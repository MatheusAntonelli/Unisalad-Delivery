import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { ReactComponent as Logo} from './unilogo.svg';

function Navbar(){
    return( 
        <nav className = "main-navbar">
            <Link to="/" className='logo-text'><Logo/></Link>
        </nav>
    )
}

export default Navbar;