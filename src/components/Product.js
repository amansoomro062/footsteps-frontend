import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Brand from './Brands';

const api = axios.create({
    baseURL: `http://localhost:5041/`
})

const imageURL = 'http://localhost:5041/images/product/';


class Product extends Component {
    state = {
        products: [],
    }

    constructor() {
        super();
        this.getProducts();
    }

    getProducts = async () => {
        try {
            let data = await api.get('/product').then(({ data }) => data);
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
        <div>
                            <div className="logos">
                    <Brand />
                </div>
        <div className="container">
            <br />
            <button className="btn btn-secondary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a brand
            </button>
            <button className="btn btn-secondary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by
            </button>
  {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div> */}



            <div className=" grid-container margin-top-60">
                    <div className="row">
                        
                        {this.state.products.map(product =>
                        
                        <div className="col-md-6 col-lg-3 mb-5 product-card" key={product._id} >
                            
                            <div className="mx-auto">    
                                <img  src={imageURL+product.image} alt="" caption="image" height="200px"  />
                                
                                <p className="float-right">Stars</p>
                                <br />
                                <br />
                                {product.model}
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 margin-top-10">
                                    <div className="portfolio-item-caption-content text-center">
                        <del>Old price
                            </del> - <span className="text-red">{product.pris}</span>
                                        <br />
                                        <span className="text-red">
                                        Save: 65% off

                                        </span>
                                        <br />
                                        <button className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        )}

                    </div>

                </div>
        </div>
        </div>

        );
    }
}
export default Product;