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
        );
    }
}
export default Slider;