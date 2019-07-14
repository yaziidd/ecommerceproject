import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import './Modal.css';

class Modal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value) =>{
                            const {closeModal, modalOpen} = value;
                            const {img, title, price,} = value.modalProduct;
                            if(!modalOpen){
                                return null;
                            }
                            else{
                                return(
                                    <div className = 'container-fluid modalContainer d-flex align-items-center justify-content-center'>
                                        <div className = 'row'>
                                            <div className = 'bg-white p-4 card shadow-5'>
                                                <h1>items Added</h1>
                                                <img src = {img} alt = 'phone'/>
                                                <h3>Product: {title}</h3>
                                                <h3>Price : ${price}</h3>
                                               <div className = ' card-footer tc'>
                                               <Link to = '/'>
                                                    <button onClick = {()=>closeModal()} className = 'btn mx-3 btn-outline-warning'>
                                                        <span>
                                                            <i className = 'fas mx-2 fa-store'/>
                                                        </span>
                                                        Store
                                                    </button>
                                                </Link>
                                                <Link to = '/cart'>
                                                    <button onClick = {()=> closeModal()} className = 'btn btn-outline-danger'>
                                                        <span>
                                                            <i className = 'fas fa-cart-plus mx-2'/>
                                                        </span>
                                                        Cart
                                                    </button>
                                                </Link>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }

                            
                        }
                    }
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

export default Modal;