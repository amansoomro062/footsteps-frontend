import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


// import {adidas} from '../images/brand/adidas';
import brand from '../images/brand/adidas.jpg';

const api = axios.create({
    baseURL: `http://localhost:5041/`
})

const imageURL = 'http://localhost:5041/images/brand/';



class Home extends Component {

    state = {
        brands: [],
        image1: 'no',
        image2: 'no',
        image3: 'no',
    }

    constructor() {
        super();
        this.getBrands();
        this.getSlider();
    }

    getBrands = async () => {
        try {
            let data = await api.get('/brand').then(({ data }) => data);
            this.setState({ brands: data })
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    getSlider = async () => {
        try {
            let data = await api.get('/slider').then(({ data }) => data);
            // console.log(this.state.image1);
            // this.setState({ slider: data })
            console.log("done with initialization");
            console.log(data);
            this.setState({
                image1: 'http://localhost:5041/images/slider/' + data[0].sliderimage,
                image2: 'http://localhost:5041/images/slider/' + data[1].sliderimage,
                image3: 'http://localhost:5041/images/slider/' + data[2].sliderimage,
            })
            // console.log(data[0].sliderimage);
            // console.log(this.state.image1);
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        return (
            <div className="home-bg" >
                <div className="container">
                    <div className="slider">
                        <Slide>
                            <div className="each-slide">
                                <div style={{ 'backgroundImage': `url(${this.state.image1})` }}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{ 'backgroundImage': `url(${this.state.image2})` }}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{ 'backgroundImage': `url(${this.state.image3})` }}>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>

                <div className="logos">
                    <div className="offset-2 col-lg-8">


                        {this.state.brands.map(brand =>
                            <img className="img-fluid right-padding" src={imageURL + brand.brandlogo} alt="" caption="Hello" width="120px" />
                            // <h1> {imageURL+brand.brandlogo} </h1>
                        )}


                    </div>
                </div>

                <div className="list-of-products">


                <div className="grid-container">
                        <div className="grid-item">
                            <span>
                                    I'm:
                                    <b>
                                        Boy
                                    </b>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Home;