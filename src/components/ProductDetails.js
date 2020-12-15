import React from 'react';
// import logo from '../images/product/adidas1-q.jpg';
// import { withRouter } from 'react-router-dom';
// import queryString from 'query-string';
import {useLocation} from "react-router-dom";
function ProductDetails() {
    
    
    let location = useLocation();
    
    console.log(location);
      return (
        <section className="offset-1 container">
            <br/>
            <br/>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 center my-auto padding-top-70 padding-bottom-70" >
                    <h3>
                        {location.product.title}
                    </h3>
                    <img src={`http://localhost:5041/images/product/${location.product.image}`} className="img-fluid"/>   
                </div>
            
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 center my-auto padding-top-70 padding-bottom-70" >
                    <del className="center">Old price</del>
                    <span className="text-red">${location.product.pris}</span>
                    <br />
                    <span className="text-red">Save: {location.product.rabat}% off</span>
                    <br/>
                    <br/>

                    Model: {location.product.model}
                    <br/>
                    Shipping Weight: {location.product.weight}KG
                    <br/>
                    {location.product.instock} Units in stock
                    <br/>
                    <br/>

                    Please choose:
                    <br/>
                    Nike shoes men size 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select>
                    {location.product.sizes.map(size =>
                        <option>
                            {size}
                        </option>
                    )}
                    </select>

                    <br/><br/>
                    <button className="btn btn-primary">  
                        Add to cart
                    </button>

                    
                </div>
            
            </div>
            <br/>
            <br/>
            <br/>
            <section className="news">
                  <h4>Information</h4>

                  <p className="margin-top-10">
                      {location.product.content}
                      <br />
                </p>

              </section>
              <br/>
              <br/>
        </section>
        );
    }
export default ProductDetails;