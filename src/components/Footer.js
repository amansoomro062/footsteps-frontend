import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link
} from "react-router-dom";
import { faCcAmazonPay, faCcAmex, faCcMastercard, faCcPaypal, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
      return (
        <footer>
            <div className="footer-top">
                {/* <div className="row"> */}
                    
                    <div className="offset-7 col-lg-4 text-white space-from-top">
                        Sign up for newsletter &nbsp; &nbsp; <input type="text" placeholder="Enter email..."/>
                    </div>
                {/* </div> */}
            </div>
            <div className="footer-down row m-0">
                <div className="offset-2 col-lg-4">
                    <FontAwesomeIcon icon={faCcPaypal} size="2x" className="icon-padding"  />
                    <FontAwesomeIcon icon={faCcMastercard} size="2x" className="icon-padding" />
                    <FontAwesomeIcon icon={faCcVisa}  size="2x" className="icon-padding"/> 
                    <FontAwesomeIcon icon={faCcAmazonPay}  size="2x" className="icon-padding"/>
                    <FontAwesomeIcon icon={faCcAmex} size="2x" className="icon-padding"/>
                </div>

                <div className="offset-1 col-lg-4 text-white">
                    
{/*  */}
                <ul className="footer">
                                <li className="footer-item ">
                                    <Link to="/home" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        Home
                                    </Link>
                                </li>

                                <li className="footer-item ">
                                    <Link to="/products" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        Products
                                    </Link>
                                </li>

                                <li className="footer-item ">
                                    <Link to="/news" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        News
                                    </Link>
                                </li>

                                <li className="footer-item">
                                    <Link to="/contact" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>


{/*  */}
                </div>

            </div>
        </footer>

        );
    }
}
export default Footer;