import React from 'react';
import './CartEmpty.css';

class CartEmpty extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'container-fluid emptyCon d-flex align-items-center justify-content-center'>
                    <div className = 'row'>
                        <div className = 'col-lg-6 border mx-auto text-center'>
                            <h1> NO ITEM WAS FOUND</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CartEmpty;