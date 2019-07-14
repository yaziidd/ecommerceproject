import React from 'react';

class CartColumns extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'container-fluid'>
                    <div className = 'row '>
                        <div className = 'col-lg-2 text-center d-none d-lg-block border py-2'>
                            Image
                        </div>
                        <div className = 'col-lg-2 text-center d-none d-lg-block border py-2'>
                            Product
                        </div>
                        <div className = 'col-lg-2 text-center d-none d-lg-block border py-2'>
                            Price
                        </div>
                        <div className = 'col-lg-2 text-center d-none d-lg-block border py-2'>
                            Quantity
                        </div>
                        <div className = 'col-lg-2 text-center d-none d-lg-block border py-2'>
                            Remove
                        </div>
                        <div className = 'col-lg-2 text-center d-none d-lg-block border py-2'>
                            Total
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CartColumns;