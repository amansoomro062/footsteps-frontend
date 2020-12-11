import React, { Component } from 'react';
import axios from 'axios';
const api = axios.create({
    baseURL: `http://localhost:5041/`
})

const imageURL = 'http://localhost:5041/images/brand/';

class Brand extends Component {

    state = {
        brands: [],
    }
    
    constructor() {
        super();
        this.getBrands();
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


    render() {
        return (
            // <div className="container">
            //     <h2>Hi, I am a News!</h2>
            // </div>
            <div className="offset-2 col-lg-8">

                {this.state.brands.map(brand =>
                    <img className="img-fluid right-padding" src={imageURL + brand.brandlogo} alt="" caption="Hello" width="120px" key={brand.brandlogo} />
                    // <h1> {imageURL+brand.brandlogo} </h1>
                )}
            </div>
        );
    }
}
export default Brand;