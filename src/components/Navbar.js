import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <ul  className="nav nav--bar">
            <Link style={{ textDecoration: 'none' }} to={location=> ({...location, pathname:'/'})}>
                <li style={{margin:'10px'}} className="nav--item">Home</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={location=> ({...location, pathname:'/cart'})}>
                <li style={{margin:'10px'}} className="nav--item">cart</li>        
            </Link>
        </ul>
    )
}

export default Navbar