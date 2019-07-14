import React from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';


class ProductList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'text-center'>
                    <ProductConsumer>
                        {
                            (value) =>{
                                const {products} = value;
                                return products.map(item =>{
                                    return (
                                        <Product key = {item.id} items = {item}/>
                                    )
                                })
                            }
                        }
                    </ProductConsumer>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;