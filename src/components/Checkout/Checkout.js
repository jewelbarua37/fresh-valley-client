import React from 'react';
import { Table } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className="container">
            <h1>Checkout</h1>
        <Table bordered className="shadow">
            <thead>
                <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td colSpan="2">Total</td>
                <td></td>
                </tr>
            </tbody>
            </Table>
            
                <button style={{backgroundColor: '#74bc5c', width: '10%'}} className="btn text-white" type="submit">Checkout</button>
            
        </div>
    );
};

export default Checkout;