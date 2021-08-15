import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm} from "react-hook-form";



const AddProducts = () => {
    const {register, handleSubmit,  formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productsData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5055/addProducts`
        console.log(productsData)
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productsData),

        })
        .then(res => console.log('server side response'))
    };
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '51cd52b7ad064e1e2d8c31735130c598')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    
    return (
        <div className="row">
            <div style={{backgroundColor: '#203d37'}}  className="col-md-3 vh-100 p-4 text-center text-white">
            <h3>FRESH VALLEY</h3>
            <br/>
            <h6>Manage Product</h6>
            <br/>
            <h6>Add Product</h6>
            <br/>
            <h6>Edit Product</h6>
            </div>
            <div style={{backgroundColor: '#f4fcfb'}}  className="col-md-9 vh-100 p-3">
                <h5 className="bg bg-white p-3 shadow rounded">Add Product</h5>
                    <form className="bg bg-white p-3 shadow rounded" onSubmit={handleSubmit(onSubmit)}>
                        <label>Product Name</label>
                        <br />
                        <input placeholder="Product Name" {...register("name")} />
                        <br />
                        <label>Add Price</label>
                        <br />
                        <input placeholder="Product Price" type="number" {...register("price")} />
                        <br /> <br/>
                        <input type="file" onChange={handleImageUpload}/>
                        <br/> <br/>
                        <button style={{backgroundColor: '#74bc5c', width: '10%'}} className="btn text-white" type="submit">Save</button>
                   </form>
            </div>

        </div>
    );
};

export default AddProducts;