import React, { Component } from 'react';
import map from '../images/map.jpg';
import axios from 'axios';
import Brand from './Brands';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    render() {
        return (
            <div>
                <div className="logos">
                    <Brand />
                </div>
                <div className="smoke-bg row">

                    <div className="offset-2 col-lg-4">

                        <form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Name</label>
                                    <input className="form-control" id="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control" id="email" type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group">

                                <button className="btn btn-primary btn-xl float-left" id="sendMessageButton" type="submit">Send</button>
                                <button className="btn btn-danger btn-xl float-left" id="cancel" type="button">Cancel</button>

                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">

                        <img src={map} height="450px" />
                    </div>

                </div>

            </div>
        );
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:5041/contact",
            data: this.state
        }).then((response) => {
            console.log(response.status);
            if (response.status === 201) {
                alert("Message Sent.");
                console.log("Message sent");
                this.resetForm()
            } else {

                console.log("Message failed");
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', phonenumber: '', message: '' })
    }
}
export default Contact;