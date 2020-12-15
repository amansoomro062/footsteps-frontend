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
        <div>
            <div className="offset-2">
            {this.state.brands.map(brand =>
                <img className="img-fluid right-padding" src={imageURL + brand.brandlogo} alt="" caption="Hello" width="120px" key={brand.brandlogo} />
            )}
            </div>

        </div>
    
        );
    }
}
export default Brand;