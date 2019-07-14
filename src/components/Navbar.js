import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'navbar bg-dark navbar-dark'>
                {
                    /*
                        https://www.iconfinder.com/icons/1243689/call_phone_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/Makoto_msk 
                    */
                }
                    <Link to = '/'>
                        <img src = {logo} alt = 'phone'/>
                    </Link>
                    <ul className = 'navbar-nav align-items-center'>
                        <li className = 'nav-item ml-5'>
                            <Link to = '/' className = 'text-white'>
                                Product
                            </Link>
                        </li>
                    </ul>
                    <Link to  = '/cart' className = 'ml-auto'>
                        <button className = 'btn btn-outline-primary'>
                            <span>
                                <i className = 'fas fa-cart-plus'/>
                            </span>
                            Go To Cart
                        </button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;