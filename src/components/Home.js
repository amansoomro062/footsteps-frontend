import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import Brand from './Brands';

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
        products: [],
        image1: 'no',
        image2: 'no',
        image3: 'no',
    }

    constructor() {
        super();
        this.getSlider();
        this.getProducts();
    }

    getProducts = async () => {
        try {
            let data = await api.get('/product').then(({ data }) => data);
            this.setState({ products: data })
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
                                <div style={{ 'backgroundImage': `url(${this.state.image1})` }} key={this.state.image1}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{ 'backgroundImage': `url(${this.state.image2})` }} key={this.state.image1}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{ 'backgroundImage': `url(${this.state.image3})` }} key={this.state.image1}>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>

                <div className="logos">
                        <Brand />
                </div>

                <div className="list-of-products">


                <div className="grid-container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <p className="product-text">hi</p>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        hello hi
                                    </div>
                                </div>
                                <img className="img-fluid" src={this.state.products.image} alt="" caption="Hello" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}
export default Home;