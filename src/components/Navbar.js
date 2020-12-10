import React, { Component } from 'react';
import brand from '../images/brand.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link
} from "react-router-dom";
import { faInstagram, faTelegram, faLinkedin,faCcAmazonPay, faCcAmex, faCcMastercard, faCcPaypal, faCcVisa, faDigg, faFacebookSquare, faPaypal, faTwitter, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';


class Navbar extends Component {
    render() {
        return (

            <div>
                <div className="col-lg-12 nav-top row m-0">
                    <div className="offset-2 col-lg-4">
                        <FontAwesomeIcon icon={faCcPaypal} size="2x" className="icon-padding"  />
                        <FontAwesomeIcon icon={faCcMastercard} size="2x" className="icon-padding" />
                        <FontAwesomeIcon icon={faCcVisa}  size="2x" className="icon-padding"/> 
                        <FontAwesomeIcon icon={faCcAmazonPay}  size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faCcAmex} size="2x" className="icon-padding"/>
                    </div>
                    <div className="offset-2 col-lg-4">
                        
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faSkype} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faTelegram} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-padding"/>
                        <FontAwesomeIcon icon={faDigg} size="2x" className="icon-padding"/>
                    </div>
                </div>
                <div className="col-lg-12 nav-dark">
                    <div className="row">
                        <div className="offset-1 col-lg-4 text-white">
                            <img src={brand} className="nav-brand" />
                        </div>

                        <div className="offset-1 col-lg-6">
                            <ul className="menu">
                                <li className="menu-item ">
                                    <Link to="/home" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        Home
                                    <br />
                                        <span className="below-item">
                                            Back to start
                                    </span>
                                    </Link>
                                </li>

                                <li className="menu-item ">
                                    <Link to="/products" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        Products
                                    <br />
                                        <span className="below-item">
                                            All our shoes
                                    </span>
                                    </Link>
                                </li>

                                <li className="menu-item ">
                                    <Link to="/news" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        News
                                    <br />
                                        <span className="below-item">
                                            Read our news
                                    </span>
                                    </Link>
                                </li>

                                <li className="menu-item ">
                                    <Link to="/contact" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        Contact
                                    <br />
                                        <span className="below-item">
                                            Contact information
                                    </span>
                                    </Link>
                                </li>
                            </ul>

                            
                        </div>

                    </div>

                </div>
                {/* <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
          </ul> */}
            </div>
        );
    }
}
export default Navbar;