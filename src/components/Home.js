import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Brand from './Brands';

import Slider from './Slider';

import 'react-slideshow-image/dist/styles.css';

const api = axios.create({
    baseURL: `http://localhost:5041/`
})

const imageURL = 'http://localhost:5041/images/product/';




class Home extends Component {

    state = {
        products: [],
        genders: [],
    }

    constructor() {
        super();
        this.getProducts();
    }



    getProducts = async () => {
        try {
            let data = await api.get('/product?limit=8').then(({ data }) => data);
            console.log("Data got");
            this.setState({ products: data })
            // this.state.products = data;
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <div className="home-bg" >
                <div className="container">
                    <Slider />
                </div>

                <div className="logos">
                    <Brand />
                </div>

                <div className="container list-of-products">
                
                <button className="btn btn-secondary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select a brand
                </button>
                <button className="btn btn-secondary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                </button>

                <div className=" grid-container margin-top-60">
                    <div className="row">
                        {this.state.products.map(product =>
                        
                        <div className="col-md-6 col-lg-3 mb-5 product-card" key={product._id}>
<Link   to={
                        {     
                            pathname: '/product-details',
                            product: product
                        }
                   }> 
                            <div className="mx-auto">    
                                <img className="img-fluid" src={imageURL+product.image} alt="" caption="image" />
                                
                                <p className="float-right">Stars</p>
                                <br />
                                <br />
                                {product.model}
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 margin-top-10">
                                    <div className="portfolio-item-caption-content text-center">
                        <del>
                        Old price
                            </del> - <span className="text-red">{product.pris}</span>
                                        <br />
                                        <span className="text-red">
                                        Save: {product.rabat}% off

                                        </span>
                                        <br />
                                        <button className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </div>
                    
                        )}

                    </div>

                </div>
            </div>
        </div>
        );
    }
}
export default Home;