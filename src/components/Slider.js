import React, { Component } from 'react';
import axios from 'axios';

import { Slide } from 'react-slideshow-image';


const api = axios.create({
    baseURL: `http://localhost:5041/`
})


class Slider extends Component {

    state = {
        image1: 'no',
        image2: 'no',
        image3: 'no',
    }

    constructor() {
        super();
        this.getSlider();
    }

    getSlider = async () => {
        try {
            let data = await api.get('/slider').then(({ data }) => data);
            console.log("done with initialization");
            console.log(data);
            this.setState({
                image1: 'http://localhost:5041/images/slider/' + data[0].sliderimage,
                image2: 'http://localhost:5041/images/slider/' + data[1].sliderimage,
                image3: 'http://localhost:5041/images/slider/' + data[2].sliderimage,
            })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <section className="slider">
                <Slide>
                    <div className="each-slide">
                        <img src={this.state.image1} className="img-fluid" /> 
                    </div>
                    <div className="each-slide">
                        
                    <img src={this.state.image2} className="img-fluid" /> 
                    </div>
                    <div className="each-slide">
                        
                    <img src={this.state.image3} className="img-fluid" /> 
                    </div>
                </Slide>
            </section>
        );
    }
}
export default Slider;