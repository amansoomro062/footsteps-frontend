import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Brand from './Brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const api = axios.create({
    baseURL: `http://localhost:5041/`
})

const imageURL = 'http://localhost:5041/images/product/';
const genderId = '5fcd268f62563f2c9495bb3a';
const brandId = '5fcd22db62563f2c9495bb35';



class Admin extends Component {
    state = {
        products: [],
        genders: [],
        brands: [],
        addNewProduct: false,
        editProduct: false,
        id: 'NA',
        title: '', 
        content: '',
        pris: '',
        model: '',
        rabat: '',
        weight: '',
        instock: '',
        sizes: [40, 41, 42, 43, 44, 45, 46, 47],
        brand: '5fcd22db62563f2c9495bb35',
        gender: '5fcd22db62563f2c9495bb35',
        image: null,
    }

    constructor() {
        super();
        this.getGenders();
        
        this.getBrands();
        this.getProducts();
        this.deleteProduct = this.deleteProduct.bind(this); 
        this.onImageChange = this.onImageChange.bind(this);
    }

    getBrands = async () => {
        try {
            let data = await api.get('/brand').then(({ data }) => data);
            console.log("Data got");
            this.setState({ brands: data })
            // this.state.products = data;
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    getGenders = async () => {
        try {
            let data = await api.get('/gender').then(({ data }) => data);
            console.log("Data got");
            this.setState({ genders: data })
            // this.state.products = data;
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value }  )
    }
    
    onBrandChange(event) {
        this.setState({brand: event.target.value})
    }

    onGenderChange(event) {
        this.setState({gender: event.target.value})
    }
    onContentChange(event) {
        this.setState({content: event.target.value }  )
    }

    onModelChange(event) {
        this.setState({ model: event.target.value }  )
    }
    onPrisChange(event) {
        this.setState({pris: event.target.value }  )
    }
    onStockChange(event) {
        this.setState({ instock: event.target.value }  )
    }
    onRabatChange(event) {
        this.setState({rabat: event.target.value }  )
    }
    
    onWeightChange(event) {
        this.setState({weight: event.target.value }  )
    }

    onImageChange=event=>{
        this.setState({ image: event.target.files[0] }  )
    }

    addProduct() {
        this.setState({addNewProduct: true})
    }

    editProduct = async (theProduct) => {        
        try {
            // let data = await api.delete(`http://localhost:5041/product/admin/${id}`).then(({ data }) => data);
            // this.setState({ products: data })
            this.state.editProduct = true;
            
            this.state.id = theProduct._id;
            this.state.title = theProduct.title;
            this.state.content = theProduct.content;
            this.state.model = theProduct.model;
            this.state.pris = theProduct.pris;
            this.state.sizes = theProduct.sizes;
            this.state.brand = theProduct.brand;
            this.state.weight = theProduct.weight;
            this.state.image = theProduct.image;
            this.state.gender = theProduct.gender;            
            this.state.rabat = theProduct.rabat;
            this.state.instock = theProduct.instock;


            this.setState({addNewProduct : true});
            console.log(theProduct);
            this.getProducts();
        } catch (err) {
            console.log(err);
        }
    }
    deleteProduct = async (id) => {        
        try {
            let data = await api.delete(`http://localhost:5041/product/admin/${id}`).then(({ data }) => data);
            // this.setState({ products: data })
            console.log(data);
            this.getProducts();
            alert("Product has been deleted!!!!!");
        } catch (err) {
            console.log(err);
        }
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

    onTitleChange(event) {
        this.setState({ title: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.title+" - "+this.state.content+" - "+ this.state.image);
        const formData = new FormData(event.target);
        
        const theProduct = {
            title: this.state.title,
            content: this.state.content,
            model: this.state.model,
            brand: this.state.brand,
            pris: this.state.pris,
            gender: this.state.gender,
            rabat: this.state.rabat,
            brand: this.state.brand,
            weight: this.state.weight,
            sizes: JSON.stringify(this.state.sizes)
        }
        
        formData.append('product', JSON.stringify(theProduct));
        formData.append('image', this.state.image);
        // Display the key/value pairs
        for(const pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
        }
        console.log(theProduct);
        console.log(JSON.stringify(theProduct.size));
        // alert("got");

        if(this.state.editProduct) {


            axios({
                method: "PUT",
                url: "http://localhost:5041/product/admin/"+this.state.id,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
            }).then((response) => {
                console.log(response.status);
                if (response.status === 201 || response.status === 200 ) {
                    alert("success");
                    // alert("Product saved");
                    // console.log("Saved");
                    this.setState({addNewProduct: false});
                    this.setState({editProduct: false});
                    this.getProducts();                
                } else {
                    
                    console.log("Error");
                }
            })

        } else {

            axios({
                method: "POST",
                url: "http://localhost:5041/product/admin",
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
            }).then((response) => {
                console.log(response.status);
                if (response.status === 201) {
                    // alert("Product saved");
                    // console.log("Saved");
                    this.setState({addNewProduct: false});
                    this.getProducts();
                } else {
                    
                    console.log("Error");
                    alert("Error")
                }
            })

        }
        
    }

    render() {
        const isNew = this.state.addNewProduct
      return (
        <section>
                            <div className="logos">
                    <Brand />
                </div>
        <div className="container">
            <br />
            <button className="btn btn-primary" type="button" onClick={()=> this.setState({addNewProduct: true})}>
                Add new product
            </button>
            &nbsp;
            {isNew === true &&
            <button className="btn btn-danger" type="button" onClick={()=> this.setState({addNewProduct: false})}>
                Cancel
            </button>
        
            }
            {isNew === true &&
                <div>
                       <form id="productForm" name="addNewProduct" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                            <div className="control-group">
                                
                                <br/>
                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Title</label>
                                    <input className="form-control" id="title" type="text" 
                                    value={this.state.title} onChange={this.onTitleChange.bind(this)} 
                                    placeholder="Enter title" required="required" data-validation-required-message="Enter title." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Content</label>
                                    <input className="form-control" id="content" type="text" 
                                    value={this.state.content} onChange={this.onContentChange.bind(this)} 
                                    placeholder="Enter content" required="required" data-validation-required-message="Enter content." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Pris</label>
                                    <input className="form-control" id="pris" type="number" 
                                    value={this.state.pris} onChange={this.onPrisChange.bind(this)} 
                                    placeholder="Enter pris" required="required" data-validation-required-message="Enter pris." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Model</label>
                                    <input className="form-control" id="model" type="text" 
                                    value={this.state.model} onChange={this.onModelChange.bind(this)} 
                                    placeholder="Enter model" required="required" data-validation-required-message="Enter model." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Rabat</label>
                                    <input className="form-control" id="rabat" type="number" 
                                    value={this.state.rabat} onChange={this.onRabatChange.bind(this)} 
                                     placeholder="Enter rabat" required="required" data-validation-required-message="Enter rabat." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Gender</label>
                                    <select onChange={this.onGenderChange.bind(this)}>
                                    {this.state.genders.map(gender =>
                                        <option key={gender._id} value={gender._id}>
                                            {gender.gender}
                                        </option>
                                    )}
                                    </select>
                                </div>


                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Brand</label>
                                    <select onChange={this.onBrandChange.bind(this)}>
                                    {this.state.brands.map(brand =>
                                        <option value={brand._id} >
                                            {brand.brandname}
                                        </option>
                                    )}
                                    </select>
                                </div>


                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>Weight</label>
                                    <input className="form-control" id="weight" type="number" value={this.state.weight} 
                                    onChange={this.onWeightChange.bind(this)} placeholder="Enter weight" required="required"
                                     data-validation-required-message="Enter weight." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                
                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <label>In Stock</label>
                                    <input className="form-control" id="instock" type="number" value={this.state.instock} 
                                    onChange={this.onStockChange.bind(this)} placeholder="Enter In stock" 
                                    required="required" data-validation-required-message="Enter In Stock." />
                                    <p className="help-block text-danger"></p>
                                </div>

                                
                                
                                <div className="form-group floating-label-form-group controls mb-0 pb-1">
                                    <input className="form-control small-text" id="image" type="file" 
                                    onChange={this.onImageChange}   placeholder="file" 
                                     />
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
 
                <h1>
                    Add new product<br/>
                </h1>
                </div>
            }
  {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div> */}



            <div className=" grid-container margin-top-60">
                    <div className="row">
                        
                        {this.state.products.map(product =>
                        
                        <div className="col-md-6 col-lg-3 mb-5 product-card" key={product._id} >
                            
                            <div className="mx-auto">    
                                <img  src={imageURL+product.image} alt="" caption="image" height="200px"  />
                                
                                <p>
                                <span className="fa fa-star checked fa-lg"></span>
                                <span className="fa fa-star checked fa-lg" ></span>
                                <span className="fa fa-star checked fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                </p>
                            
                                {product.model}
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 margin-top-10">
                                    <div className="portfolio-item-caption-content text-center">
                        <del>Old price
                            </del> - <span className="text-red">{product.pris}</span>
                                        <br />
                                        <span className="text-red">
                                        Save: {product.rabat}% off

                                        </span>
                                        <br />
                                        <button className="btn btn-primary" onClick={() => this.editProduct(product)}>Edit</button>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => this.deleteProduct(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    
                        )}


{/* <FontAwesomeIcon icon={faPlus} size="10x" className="icon-padding"  /> */}
{/* new product code */}

                    {/* <i className="fas fa-plus fa-3x"></i> */}
                    

                    </div>

                </div>
        </div>
        </section>

        );
    }
}
export default Admin;