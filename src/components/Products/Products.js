
import React from 'react';
import { useHistory } from 'react-router-dom';

const Products = ({product}) => {
    const history = useHistory();
    const handleLogin = () =>{
        history.push('/login')
    }

    return (
        
            <div className="col-md-3 m-5 border rounded text-center shadow">
                <img style={{height: '300px'}} src={product.imageURL} alt="" />
                <h5>{product.name}</h5>
                <div className="row mb-3">
                   <div className="col-md-6">
                    <h4 style={{color: '#71ba58'}} className="font-weight-bold">${product.price}</h4>
                   </div>
                   <div className="col-md-6 ">
                        <button onClick={handleLogin} style={{backgroundColor: '#71ba58'}} className="btn text-white">Buy Now</button>
                   </div>
                </div>
            </div>
    
           
        
        
    );
};

export default Products;