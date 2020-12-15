import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import { faCcAmazonPay, faCcAmex, faCcMastercard, faCcPaypal, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:5041/newssubscription",
            data: this.state
        }).then((response) => {
            console.log(response.status);
            if (response.status === 201) {
                alert("Thank you!");
                this.resetForm();
            } else {

                console.log("Message failed");
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', phonenumber: '', message: '' })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    render() {
        return (
            <footer>
                <div className="footer-top">
                    {/* <div className="row"> */}

                    <div className="offset-lg-7 offset-sm-2 offset-xs-2 offset-md-3 col-lg-4 text-white space-from-top">
                         
                        <form id="newsLetterForm" name="newsletter" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                            <div className="control-group">
                                <div className="form-group floating-label-form-group  pb-2">
                                    <label>Sign up for newsletter </label>
                                    <div className="col-lg-8">
                                        <input className="form-control" id="email" type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    </div>
                                    <div className="col-lg-3">
                                    <button className="btn btn-primary " id="sendMessageButton" type="submit">Send</button> 
                            
                                    </div>

                                </div>    
                            </div>
                        </form>
                   
                    </div>
                    {/* </div> */}
                </div>
                <div className="footer-down row m-0">
                    <div className="offset-lg-2 col-lg-4 col-xs-12 col-sm-12 ">
                        <FontAwesomeIcon icon={faCcPaypal} size="2x" className="icon-padding" />
                        <FontAwesomeIcon icon={faCcMastercard} size="2x" className="icon-padding" />
                        <FontAwesomeIcon icon={faCcVisa} size="2x" className="icon-padding" />
                        <FontAwesomeIcon icon={faCcAmazonPay} size="2x" className="icon-padding" />
                        <FontAwesomeIcon icon={faCcAmex} size="2x" className="icon-padding" />
                    </div>

                    <div className="offset-lg-1 col-lg-4 col-xs-12 col-sm-12 text-white">

                        {/*  */}
                        <ul className="footer">
                            <li className="footer-item ">
                                <Link to="/home" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                    Home
                                    </Link>
                            </li>

                            <li className="footer-item ">
                                <Link to="/products" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                    Products
                                    </Link>
                            </li>

                            <li className="footer-item ">
                                <Link to="/news" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                    News
                                </Link>
                            </li>

                            <li className="footer-item">
                                <Link to="/contact" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                    Contact
                                    </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>

        );
    }
}
export default Footer;