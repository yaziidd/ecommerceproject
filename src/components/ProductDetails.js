import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class ProductDetails extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value) =>{
                            const {img, company, info, title, price} = value.productDetail;
                            return(
                                <div className = 'container-fluid'>
                                    <div className = 'row'>
                                        <div className = 'col-lg-6 mx-auto text-center'>
                                            <h1>{title}</h1>
                                        </div>
                                    </div>
                                    <div className  = 'row shadow-3'>
                                        <div className = 'col-lg-6 bg-warning  text-center'>
                                            <img src = {img} alt = 'phone'/>
                                        </div>
                                        <div className = 'col-lg-6 p-5 bg-danger'>
                                            <h3>Made By: {company}</h3>
                                            <h3>Model: {title}</h3>
                                            <h3>Price: ${price}</h3>
                                            <p className = 'text-white'>Some info about the Product: </p>
                                            <p className = 'text-white text-justify'>{info}</p>
                                        </div>
                                    </div>
                                    <div className = 'row mt-5 d-flex'>
                                    <div className = ' col-lg-6 mx-auto text-center '>
                                           <Link to = '/'>
                                                <button className = 'btn col-lg-4 col-3 mx-3 btn-outline-warning'>
                                                    <span>
                                                        <i className = 'fas mx-2 fa-store'/>
                                                    </span>
                                                    Store
                                                </button>
                                            </Link>
                                            <Link to = '/cart'>
                                                <button className = 'col-lg-4 col-3 btn btn-outline-danger'>
                                                    <span>
                                                        <i className = 'fas fa-cart-plus mx-2'/>
                                                    </span>
                                                    Cart
                                                </button>
                                            </Link>
                                           </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

export default ProductDetails;